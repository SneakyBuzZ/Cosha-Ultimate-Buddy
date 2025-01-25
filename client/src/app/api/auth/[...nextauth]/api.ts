import { SignInCallbackReturnType, SignInCallbackType } from "@/lib/types";
import { LOGIN_URL, REGISTER_URL } from "../../../../lib/endpoints";
import axios from "axios";

export const handleSignInOption = async ({
  user,
  account,
}: SignInCallbackType): Promise<SignInCallbackReturnType> => {
  try {
    const loginPayload = {
      email: user.email,
    };

    const { status: loginStatus, data: loginData } = await axios.post(
      LOGIN_URL,
      loginPayload
    );

    if (loginStatus === 200) {
      user.id = loginData.payload.user.id;
      return {
        isAllowed: true,
        user: {
          ...user,
          ...loginData.payload.user,
          accessToken: loginData.payload.accessToken,
          refreshToken: loginData.payload.refreshToken,
        },
      };
    }

    if (loginStatus === 402) {
      console.log(
        "ERROR :: OPTIONS.TS :: INVALID CREDENTIALS WERE SENT FOR LOGIN"
      );
      return {
        isAllowed: "redirectToLogin",
        user: null,
      };
    }

    console.log("ERROR :: OPTIONS.TS :: UNIDENTIFIED ERROR OCCURRED FOR LOGIN");
    return {
      isAllowed: "redirectToLogin",
      user: null,
    };
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response;

      if (status === 400) {
        console.log("ERROR :: OPTIONS.TS :: BAD REQUEST");
        return {
          isAllowed: "redirectToLogin",
          user: null,
        };
      }

      if (status === 404) {
        console.log(
          "ERROR :: OPTIONS.TS :: USER NOT FOUND, ATTEMPTING TO REGISTER"
        );
        const { user: registerUser } = await handleRegistration({
          user,
          account,
        });

        return {
          isAllowed: "redirectToLogin",
          user: registerUser,
        };
      }

      console.log(
        "ERROR :: OPTIONS.TS :: UNIDENTIFIED ERROR OCCURRED DURING LOGIN"
      );
      return {
        isAllowed: "redirectToLogin",
        user: null,
      };
    }

    console.log("ERROR :: OPTIONS.TS :: NON-Axios ERROR: ", error);
    return {
      isAllowed: "redirectToLogin",
      user: null,
    };
  }
};

const handleRegistration = async ({ user, account }: SignInCallbackType) => {
  const registerPayload = {
    email: user.email,
    name: user.name,
    image: user.image,
    oauthId: account?.providerAccountId,
    provider: account?.provider,
  };

  try {
    const { status: registerStatus, data: registerData } = await axios.post(
      REGISTER_URL,
      registerPayload
    );

    if (registerStatus === 200) {
      return {
        isAllowed: "redirectToLogin",
        user: {
          ...user,
          ...registerData.payload.user,
          accessToken: registerData.payload.accessToken,
          refreshToken: registerData.payload.refreshToken,
        },
      };
    }

    if (registerStatus === 409) {
      console.log("ERROR :: OPTIONS.TS :: USER ALREADY EXISTS");
      return {
        isAllowed: "redirectToLogin",
        user: null,
      };
    }

    if (registerStatus === 500) {
      console.log("ERROR :: OPTIONS.TS :: DB ERROR OCCURRED");
      return {
        isAllowed: "redirectToLogin",
        user: null,
      };
    }

    console.log(
      "ERROR :: OPTIONS.TS :: UNIDENTIFIED ERROR OCCURRED DURING REGISTRATION"
    );
    return {
      isAllowed: "redirectToLogin",
      user: null,
    };
  } catch (error) {
    console.error("ERROR :: OPTIONS.TS :: ERROR AT REGISTRATION: ", error);
    return {
      isAllowed: "redirectToLogin",
      user: null,
    };
  }
};

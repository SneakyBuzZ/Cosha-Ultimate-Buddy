"use client";

import { File, Folder, Tree } from "@/components/ui/file-tree";

export function FileStructure() {
  return (
    <div className="relative text-lg flex h-2/3 w-full flex-col items-center justify-center overflow-hidden border bg-background rounded-none">
      <Tree
        className="overflow-hidden rounded-md bg-background p-2"
        initialSelectedId="7"
        initialExpandedItems={[
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
        ]}
        elements={ELEMENTS}
      >
        <Folder className="text-neutral-400 text-md" element="src" value="1">
          <Folder className="text-md" value="2" element="app">
            <File className="text-md" value="3">
              <p>layout.tsx</p>
            </File>
            <File className="text-neutral-400" value="4">
              <p>page.tsx</p>
            </File>
          </Folder>
          <Folder className="text-md" value="5" element="components">
            <Folder className="text-md" value="6" element="ui">
              <File className="text-md" value="7">
                <p>button.tsx</p>
              </File>
            </Folder>
            <File className="text-md" value="8">
              <p>header.tsx</p>
            </File>
            <File className="text-md" value="9">
              <p>footer.tsx</p>
            </File>
          </Folder>
          <Folder className="text-md" value="10" element="lib">
            <File value="11">
              <p>utils.ts</p>
            </File>
          </Folder>
        </Folder>
      </Tree>
    </div>
  );
}

const ELEMENTS = [
  {
    id: "1",
    isSelectable: true,
    name: "src",
    children: [
      {
        id: "2",
        isSelectable: true,
        name: "app",
        children: [
          {
            id: "3",
            isSelectable: true,
            name: "layout.tsx",
          },
          {
            id: "4",
            isSelectable: true,
            name: "page.tsx",
          },
        ],
      },
      {
        id: "5",
        isSelectable: true,
        name: "components",
        children: [
          {
            id: "6",
            isSelectable: true,
            name: "header.tsx",
          },
          {
            id: "7",
            isSelectable: true,
            name: "footer.tsx",
          },
        ],
      },
      {
        id: "8",
        isSelectable: true,
        name: "lib",
        children: [
          {
            id: "9",
            isSelectable: true,
            name: "utils.ts",
          },
        ],
      },
    ],
  },
];

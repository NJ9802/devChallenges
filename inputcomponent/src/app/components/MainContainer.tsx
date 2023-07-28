"use client";

import React from "react";
import Label from "./ui/Label";
import ItemsContainer from "./ui/ItemsContainer";
import FocusHoverLabel from "./ui/FocusHoverLabel";
import Input from "./ui/Input";

const MainContainer = () => {
  return (
    <main className="flex flex-1">
      <div
        className="
        flex-1
        pt-[1.88rem]
        px-[5.06rem]"
      >
        <h1
          className="
            h-9
            font-poppins
            font-medium
            text-2xl
            text-gray-2
            "
        >
          Inputs
        </h1>

        <div className="flex flex-col gap-[45px] mt-7">
          <div className="grid grid-cols-3 gap-y-[45px] gap-x-4 xl:max-w-[60%]">
            <ItemsContainer>
              <Label text="Input" />
              <Input label="Label" placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel />
              <Input label="Label" hover placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel focus />
              <Input label="Label" focus placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Input error" />
              <Input error label="Label" placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel />
              <Input label="Label" hover placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel focus />
              <Input error label="Label" placeholder="Placeholder" />
            </ItemsContainer>
          </div>

          <div>
            <ItemsContainer>
              <Label text="Input disabled" />
              <Input disabled placeholder="Placeholder" />
            </ItemsContainer>
          </div>

          <div className="grid grid-cols-2 gap-y-[45px] gap-x-4 xl:max-w-[60%]">
            <ItemsContainer>
              <Label text="Input helperText=”Some interesting text”" />
              <Input
                label="Label"
                helperText="Some interesting text"
                placeholder="Placeholder"
              />
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Input helperText=”Some interesting text” error" />
              <Input
                label="Label"
                helperText="Some interesting text"
                placeholder="Placeholder"
                error
              />
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Input startIcon=”call”" />
              <Input label="Label" startIcon="call" placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Input endIcon=”lock”" />
              <Input label="Label" endIcon="lock" placeholder="Placeholder" />
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Input value=”Text”" />
              <Input label="Label" value="Text" />
            </ItemsContainer>

            <div />

            <ItemsContainer>
              <Label text="Input inputSize=”sm”" />
              <Input label="Label" inputSize="sm" placeholder="Placeholder" />
            </ItemsContainer>
           
            <ItemsContainer>
              <Label text="Input inputSize=”md”" />
              <Input label="Label" inputSize="md" placeholder="Placeholder" />
            </ItemsContainer>
          </div>

          <ItemsContainer>
            <Label text="Input fullWidth" />
            <Input label="Label" value="Text" fullWidth />
          </ItemsContainer>

          <ItemsContainer>
            <Label text="Input multiline row={4}" />
            <Input label="Label" multiline row={4} placeholder="Placeholder" />
          </ItemsContainer>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;

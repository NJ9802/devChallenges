"use client";

import React from "react";
import Label from "./Label";
import Button from "./Button";
import ItemsContainer from "./ItemsContainer";
import FocusHoverLabel from "./FocusHoverLabel";

const MainContainer = () => {
  return (
    <main className="flex flex-1">
      <div
        className="
        flex-1
        pt-[53px]
        pb-[52px]
        pl-[90.5px]"
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
          Buttons
        </h1>

        <div className="flex flex-col gap-[45px] mt-7">
          <div className="grid grid-cols-2 gap-y-[45px] gap-x-4 max-w-[40%]">
            <ItemsContainer>
              <Label text="Button" />
              <Button>Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel />
              <Button focus>Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button variant=”outline”" />
              <Button variant="outline">Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel />
              <Button variant="outline" focus>
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button variant=”text”" />
              <Button variant="text">Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel />
              <Button variant="text" focus>
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button disableShadow" />
              <Button color="primary" disableShadow>
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>{""}</ItemsContainer>

            <ItemsContainer>
              <Label text="Button disabled" />
              <Button disabled>Disabled</Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button variant=”text” disabled" />
              <Button variant="text" disabled>
                Disabled
              </Button>
            </ItemsContainer>
          </div>
          <div
            className="
            flex
            items-center
            space-x-[80px]"
          >
            <ItemsContainer>
              <Label text="Button startIcon=”favorite”" />
              <Button color="primary" startIcon="favorite">
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button endIcon=”local_grocery_store”" />
              <Button color="primary" endIcon="local_grocery_store">
                Default
              </Button>
            </ItemsContainer>
          </div>
          <div className="grid grid-cols-4 gap-y-[45px] gap-x-4 max-w-[70%]">
            <ItemsContainer>
              <Label text="Button size=”sm”" />
              <Button color="primary" size="sm">
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button size=”md”" />
              <Button color="primary" size="md">
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button size=”lg”" />
              <Button color="primary" size="lg">
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>{""}</ItemsContainer>

            <ItemsContainer>
              <Label text="Button color=”default”" />
              <Button color="default">Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button color=”primary”" />
              <Button color="primary">Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button color=”secondary”" />
              <Button color="secondary">Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <Label text="Button color=”danger”" />
              <Button color="danger">Default</Button>
            </ItemsContainer>

            <ItemsContainer>
              <FocusHoverLabel />
              <Button color="default" focus>
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Button color="primary" focus>
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Button color="secondary" focus>
                Default
              </Button>
            </ItemsContainer>

            <ItemsContainer>
              <Button color="danger" focus>
                Default
              </Button>
            </ItemsContainer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContainer;

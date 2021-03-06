import React, { Suspense, useState } from "react";
const ColorPalette = React.lazy(() => import("../ColorPalette/ColorPalette"));

interface IResultProps {
    menus: Array<string>;
    color: Array<number>;
}
const Result: React.FC<IResultProps> = ({ menus, color }) => {
    const [tab, setTab] = useState(menus[0]);
    return (
        <>
            <nav className="shadow">
                <ul className="flex text-white h-10 bg-gray-500">
                    {menus
                        ? menus.map((menu) => (
                              <li
                                  key={menu}
                                  className={`flex flex-row items-center px-6 hover:bg-gray-600 ${
                                      tab == menu ? "bg-gray-600" : ""
                                  } cursor-pointer`}
                                  onClick={() => {
                                      setTab(menu);
                                  }}
                              >
                                  {menu}
                              </li>
                          ))
                        : ""}
                </ul>
            </nav>
            {tab === "색상 팔레트" && (
                <Suspense fallback={<div>Loading...</div>}>
                    <ColorPalette color={color} />
                </Suspense>
            )}
        </>
    );
};

export default Result;

import React from "react";
import { TopTabs } from "@/components/navigation/top-tabs";

const TabsLayout = () => {
  return (
    <TopTabs>
      <TopTabs.Screen
        name="alcohol"
        options={{
          title: "Alkoholowe",
        }}
      />
      <TopTabs.Screen
        name="non-alcohol"
        options={{
          title: "Bezalkoholowe",
        }}
      />
    </TopTabs>
  );
};

export default TabsLayout;

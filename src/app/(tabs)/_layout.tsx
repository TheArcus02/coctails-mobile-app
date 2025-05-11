import React from "react";
import { TopTabs } from "@/components/navigation/top-tabs";

const TabsLayout = () => {
  return (
    <TopTabs>
      <TopTabs.Screen
        name="easy"
        options={{
          title: "Łatwe",
        }}
      />
      <TopTabs.Screen
        name="hard"
        options={{
          title: "Trudne",
        }}
      />
    </TopTabs>
  );
};

export default TabsLayout;

import { task } from "@trigger.dev/sdk/v3";

export const dailyProfitSummary = task({
  id: "daily-profit-summary",
  run: async () => {
    return {
      message: "AI Profit OS daily profit summary task is connected.",
      nextActions: [
        "Build BetterDesk demo",
        "Create faceless YouTube idea scorer",
        "Rank profit opportunities",
      ],
    };
  },
});

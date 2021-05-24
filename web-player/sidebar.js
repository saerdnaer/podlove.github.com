module.exports = [
  [
    {
      type: "doc",
      id: "web-player-landing",
    },
    {
      type: "category",
      label: "Podlove Web Player 5",
      items: [
        "v5/features",
        "v5/installation",
        "v5/usage",
        "v5/configuration",
        "v5/playground",
        "v5/theming",
        {
          type: "category",
          label: "Templating",
          items: [
            "v5/templating/getting-started",
            {
              type: "category",
              label: "Components",
              items: [
                "v5/templating/components/root",
                "v5/templating/components/episode-title",
                "v5/templating/components/episode-subtitle",
                "v5/templating/components/show-title",
                "v5/templating/components/poster",
                "v5/templating/components/play-button",
                "v5/templating/components/step-forward",
                "v5/templating/components/step-backward",
                "v5/templating/components/progress-bar",
                "v5/templating/components/speed-control",
                "v5/templating/components/volume-control",
                "v5/templating/components/chapter-next",
                "v5/templating/components/chapter-previous",
                "v5/templating/components/chapter-current",
                "v5/templating/components/tabs",
                "v5/templating/components/tab-trigger",
                "v5/templating/components/tab-chapters",
                "v5/templating/components/tab-transcripts",
                "v5/templating/components/tab-files",
                "v5/templating/components/tab-playlist",
                "v5/templating/components/tab-share",
                "v5/templating/components/timer-current",
                "v5/templating/components/timer-duration",
                "v5/templating/components/play-state",
                "v5/templating/components/subscribe-button",
                "v5/templating/components/error",
              ],
            },
            "v5/templating/localization",
          ],
        },
        {
          type: "category",
          label: "Extensions",
          items: ["v5/extensions/runtime-api", "v5/extensions/plugin-external", "v5/extensions/player-syncing"],
        },
      ],
    },
    {
      type: "category",
      label: "Podlove Web Player 4",
      items: [
        "v4/features",
        "v4/installation",
        "v4/embedding",
        "v4/theming",
        "v4/configuration",
        "v4/playground",
        "v4/extensions",
        "v4/store",
      ],
    },
  ],
];
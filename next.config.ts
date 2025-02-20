import type { NextConfig } from "next";
import { RuleSetRule } from "webpack";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "src/scss/_variables.scss";`
  },



  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: RuleSetRule) => {
      if (rule.test instanceof RegExp) {
        return rule.test.test(".svg");
      }
      return false;
    });

    if (!fileLoaderRule) {
      throw new Error("File loader rule for SVG not found.");
    }

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              svgo: false, 
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                  {
                    name: "removeAttrs",
                    params: {
                      attrs: "(id|class)",
                    },
                  },
                ],
              },
            },
          },
        ],
      }
    );

    fileLoaderRule.exclude = /\.svg$/i;

    return config; 
  },
};

export default nextConfig;

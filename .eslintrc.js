module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "linebreak-style": "off",
      "no-multi-spaces": "warn",
      "spaced-comment": "off",
      "import/no-extraneous-dependencies": "off",
      "no-var": "warn",
      "arrow-body-style": "off",
      "no-use-before-define": "off",
      "no-trailing-spaces": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "react/no-unused-prop-types": ["error", {
        "skipShapeProps": true,
      }],
      "strict": "off",
    },
    "globals": {
      "window": true,
      "document": true,
      "Console": true,
    },
};

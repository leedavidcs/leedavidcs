const { addBundleVisualizer, addWebpackAlias, override } = require("customize-cra");
const path = require("path");

module.exports = override(
	addWebpackAlias({ "@": path.resolve(__dirname, "./src") }),
	process.env.BUNDLE_ANALYZE === "true" && addBundleVisualizer()
);

import webpack from "webpack";
import _ from "webpack-dev-server";

const config: webpack.Configuration =
{
	mode: "development",
	entry: "./src/main.ts",
	module:
	{
		rules:
		[
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	devServer:
	{
		static: "./dist",
		liveReload: false,
		hot: false,
		client:
		{
			logging: "warn",
			reconnect: false
		}
	}
};

export default config;
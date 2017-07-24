import * as path from "path";
import * as webpack from "webpack";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import {APP_BUNDLE_NAME, WDS_PORT} from "./src/shared/config";

export default {
    context: path.join(__dirname, "."),
    entry: [
        "react-hot-loader/patch",
        './src/index.tsx',
    ],
    output: {
        filename: APP_BUNDLE_NAME,
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                loaders: ["style-loader", "css-loader"],
            },
        ]
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    devtool: 'source-map',
    devServer: {
        port: WDS_PORT,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV || "test"),
                TEST: process.env.TEST || false,
            },
        }),
        new CopyWebpackPlugin([{ from: "public" }]),
    ]
};

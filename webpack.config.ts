import * as path from "path";
import * as webpack from "webpack";
import * as CopyWebpackPlugin from "copy-webpack-plugin";
import {WDS_PORT, APP_BUNDLE_NAME} from "./src/shared/config";

export default {
    context: path.join(__dirname, "."),
    entry: [
        "react-hot-loader/patch",
        './src/index.tsx',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: `http://localhost:${WDS_PORT}/dist/`,
        filename: APP_BUNDLE_NAME
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
        new CopyWebpackPlugin([{ from: "public" }]),
    ]
};

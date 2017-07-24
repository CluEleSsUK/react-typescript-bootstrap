import {APP_BUNDLE_NAME, APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT} from "./shared/config";
import {isProd, isTest} from "./util/env";

export const renderApp = () =>
    `<!DOCTYPE html>
    <html>
    <head>
        <base href="/">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="data:image/x-icon;base64,AAABAAEAEBAAAAAAAABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3qoEAd6r/AHeqgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3qoEAd6r/AHeqgQAAAAAAAAAAAAAAAAAAAAAAeaz/AMz//wCj1v8Aeaz/AHmsQAAAAAAAAAAAAHmsQAB5rP8Ao9b/AMz//wB5rP8AAAAAAAAAAAAAAAAAAAAAAHyv/wi66/8Lz///CLrr/wB8r/8AfK+/AHyvvwB8r/8Iuuv/C8///wi66/8AfK//AAAAAAAAAAAAAAAAAAAAAAB/soEOqdn/G9L//xvS//8b0v//FL3s/xS97P8b0v//G9L//xvS//8Oqdn/AH+ygQAAAAAAAAAAAAAAAAAAAAAAgrVAAIK1/y3W//8t1v//Ldb//y3W//8t1v//Ldb//y3W//8t1v//AIK1/wCCtUAAAAAAAAAAAAAAAAAAAAAAAAAAAACGuf8xxu3/Qdv//0Hb//9B2///Qdv//0Hb//9B2///Mcbt/wCGuf8AAAAAAAAAAAAAAAAAAAAAAAAAAACKvUAAir3/Qsru/1jg//9Y4P//WOD//1jg//9Y4P//WOD//0LK7v8Air3/AIq9QAAAAAAAAAAAAAAAAACOwUAAjsH/U8/v/2/l//9v5f//b+X//2/l//9v5f//b+X//2/l//9v5f//U8/v/wCOwf8AjsFAAAAAAACTxoEAk8b/ZNXx/4Xr//+F6///hev//4Xr//+F6///hev//4Xr//+F6///hev//4Xr//9k1fH/AJPG/wCTxoEAl8r/3f///734//+c8P//nPD//5zw//+c8P//nPD//5zw//+c8P//nPD//5zw//+c8P//vfj//93///8Al8r/AJvOgQCbzv8Am87/AJvO/wCbzv9YyOf/sPX//7D1//+w9f//sPX//1jI5/8Am87/AJvO/wCbzv8Am87/AJvOgQAAAAAAAAAAAAAAAAAAAAAAAAAAAJ/S/8L5///C+f//wvn//8L5//8An9L/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACi1YFpz+r/0vz//9L8//9pz+r/AKLVgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKXY/93////d////AKXY/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACo24Fv1O3/b9Tt/wCo24EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKrd/wCq3f8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAx+MAAMPDAADAAwAAwAMAAOAHAADgBwAA4AcAAMADAAAAAAAAAAAAAAAAAAD4HwAA+B8AAPw/AAD8PwAA/n8AAA==" rel="icon" type="image/x-icon" />
            
            <title>Admin dashboard</title>
            <link rel="stylesheet" type="text/css" href="${STATIC_PATH}/style.css" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans"> 
    </head>
    <body>
    <div class="${APP_CONTAINER_CLASS} container-fluid"></div>
    <script type="text/javascript" src="${isProd || isTest ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/${APP_BUNDLE_NAME}"></script></body>
    </html>`;

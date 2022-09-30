// this is a txiki FFI wrapper around raylib

const FFI = tjs.ffi

let extension = 'so'
if (tjs.platform === 'darwin') {
  extension = 'dylib'
}
if (tjs.platform === 'windows') {
  extension = 'dll'
}

const lib = new FFI.Lib(`./libraylib.4.2.0.${extension}`)
const r = {}

r.InitWindow = new FFI.CFunction(lib.symbol('InitWindow'), FFI.types.void, [FFI.types.uint, FFI.types.uint, FFI.types.string])
export const InitWindow = (width, height, title) => r.InitWindow.call(width, height, title)

r.SetTargetFPS = new FFI.CFunction(lib.symbol('SetTargetFPS'), FFI.types.void, [FFI.types.uint])
export const SetTargetFPS = (fps) => r.SetTargetFPS.call(fps)

r.WindowShouldClose = new FFI.CFunction(lib.symbol('WindowShouldClose'), FFI.types.sint, [])
export const WindowShouldClose = () => r.WindowShouldClose.call()

r.BeginDrawing = new FFI.CFunction(lib.symbol('BeginDrawing'), FFI.types.void, [])
export const BeginDrawing = () => r.BeginDrawing.call()

r.ClearBackground = new FFI.CFunction(lib.symbol('ClearBackground'), FFI.types.void, [FFI.types.uint])
export const ClearBackground = (color) => r.ClearBackground.call(color)

r.EndDrawing = new FFI.CFunction(lib.symbol('EndDrawing'), FFI.types.void, [])
export const EndDrawing = () => r.EndDrawing.call()

r.DrawText = new FFI.CFunction(lib.symbol('DrawText'), FFI.types.void, [FFI.types.string, FFI.types.uint, FFI.types.uint, FFI.types.uint, FFI.types.uint])
export const DrawText = (text, posX, posY, fontSize, color) => r.DrawText.call(text, posX, posY, fontSize, color)

r.CloseWindow = new FFI.CFunction(lib.symbol('CloseWindow'), FFI.types.void, [])
export const CloseWindow = () => r.CloseWindow.call()

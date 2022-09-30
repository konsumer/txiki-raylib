// simple basic txiki-raylib demo
// run with tjs ./demo.js

import {
  InitWindow,
  SetTargetFPS,
  WindowShouldClose,
  BeginDrawing,
  ClearBackground,
  DrawText,
  EndDrawing,
  CloseWindow
} from './raylib.js'

InitWindow(800, 450, 'txiki-raylib')
SetTargetFPS(60)

while (!WindowShouldClose()) {
  BeginDrawing()
  ClearBackground(0x000000)
  DrawText('Congrats! You created your first txiki-raylib window!', 120, 200, 20, 0xffffffff)
  EndDrawing()
}

CloseWindow()

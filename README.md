#Compilation .C vers .WASM

```
emcc CCompiler/main.c CCompiler/ast/ast.c CCompiler/buffer/buffer.c CCompiler/generator/generator.c CCompiler/lexer/lexer.c CCompiler/parser/parser.c CCompiler/semantic/semantic.c CCompiler/utils/utils.c  -sEXPORTED_FUNCTIONS=_start_compiler -sEXPORTED_RUNTIME_METHODS=ccall,cwrap -o utils/compiler.js
```
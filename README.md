# atl-augmentation-error-repro
Simple repro of "augmentation error"

```
npm i
typings install

> tsc

> webpack
Hash: f4974c9c9f1dfc39fea9                                                                                                 
Version: webpack 1.13.1                                                                                                    
Time: 2785ms                                                                                                               
         Asset    Size  Chunks             Chunk Names                                                                     
main.bundle.js  661 kB       0  [emitted]  main                                                                            
    + 342 hidden modules                                                                                                   
                                                                                                                           
ERROR in [default] D:\dev\atl-augmentation-error-repro\node_modules\rxjs\add\observable\bindCallback.d.ts:2:15             
Invalid module name in augmentation, module '../../Observable' cannot be found.                                            
                                                                                                                           
ERROR in [default] D:\dev\atl-augmentation-error-repro\node_modules\rxjs\add\observable\bindNodeCallback.d.ts:2:15         
Invalid module name in augmentation, module '../../Observable' cannot be found.                                            
...
```

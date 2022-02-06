{"version":3,"sources":["editor_panel.js"],"names":["BX","namespace","proxy","Landing","Utils","getSelectedElement","UI","Panel","EditorPanel","BaseButtonPanel","apply","this","arguments","layout","classList","add","position","currentElement","makeDraggable","registerBaseActions","appendToBody","rect","getBoundingClientRect","instance","getInstance","scrollHandler","target","onShow","node","onScroll","bind","document","addEventListener","onKeydown","window","passive","err","onHide","removeEventListener","event","which","nodeName","preventDefault","shiftKey","execCommand","metaKey","range","getSelection","getRangeAt","br","create","deleteContents","insertNode","createRange","setStartAfter","collapse","sel","removeAllRanges","addRange","setTimeout","adjustPosition","editor","dragButton","Button","EditorAction","html","attrs","title","Loc","getMessage","onbxdrag","onDrag","onbxdragstop","onDragEnd","jsDD","registerObject","prependButton","offsetCalculates","offsetLeft","offsetTop","x","y","pos","current_node","Math","max","abs","left","top","DOM","write","remove","style","addButton","onClick","adjustButtonsState","CreateLink","rights","Env","getOptions","includes","CreatePage","ColorAction","text","TextBackgroundAction","lastPosition","adjustAbsolutePosition","force","nodeRect","width","height","bodyContent","closest","bottom","innerHeight","pageYOffset","innerWidth","hideButtonsPopups","body","appendChild","mouseTarget","onMousedown","preventClick","onMouseUp","stopPropagation","closePopup","button","popup","close","menu","buttons","forEach","additionalButtons","Tool","ColorPicker","hideAll","prototype","constructor","__proto__","show","element","insertAfter","prevSibling","querySelector","isShown","onCustomEvent","call","hide","getAction","value","key","get","requestAnimationFrame","format","getFormat","bold","italic","underline","strike","align","getComputedStyle","getPropertyValue","match","isFixed"],"mappings":"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","file":"editor_panel.map.js"}
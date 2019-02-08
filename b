console.error src/index.js:533
    TypeAlias/InterfaceDeclaration/OpaqueType found

  console.error src/convertToPropTypes.js:83
    convertToPropTypes Node {
      type: 'TypeAlias',
      start: 80,
      end: 109,
      loc:
       SourceLocation {
         start: Position { line: 5, column: 0 },
         end: Position { line: 5, column: 29 } },
      id:
       Node {
         type: 'Identifier',
         start: 85,
         end: 90,
         loc: SourceLocation { start: [Object], end: [Object], identifierName: 'Props' },
         name: 'Props' },
      typeParameters: null,
      right:
       Node {
         type: 'IntersectionTypeAnnotation',
         start: 93,
         end: 108,
         loc: SourceLocation { start: [Object], end: [Object] },
         types: [ [Object], [Object] ] } }

  console.error src/convertToPropTypes.js:83
    convertToPropTypes Node {
      type: 'GenericTypeAnnotation',
      start: 93,
      end: 102,
      loc:
       SourceLocation {
         start: Position { line: 5, column: 13 },
         end: Position { line: 5, column: 22 } },
      typeParameters: null,
      id:
       Node {
         type: 'Identifier',
         start: 93,
         end: 102,
         loc: SourceLocation { start: [Object], end: [Object], identifierName: 'BaseProps' },
         name: 'BaseProps' } }

  console.error src/convertToPropTypes.js:83
    convertToPropTypes Node {
      type: 'ObjectTypeAnnotation',
      start: 105,
      end: 108,
      loc:
       SourceLocation {
         start: Position { line: 5, column: 25 },
         end: Position { line: 5, column: 28 } },
      callProperties: [],
      properties: [],
      indexers: [],
      internalSlots: [],
      exact: false,
      inexact: false }

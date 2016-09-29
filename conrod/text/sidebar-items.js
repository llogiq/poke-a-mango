initSidebarItems({"fn":[["height","Determine the total height of a block of text with the given number of lines, font size and `line_spacing` (the space that separates each line of text)."],["lines","Produce an iterator yielding each line within the given `text` as a new `&str`, where the start and end indices into each line are provided by the given iterator."],["pt_to_px","Converts the given font size in \"points\" to its font size in pixels."],["pt_to_scale","Converts the given font size in \"points\" to a uniform `rusttype::Scale`."]],"mod":[["cursor","Logic related to the positioning of the cursor within text."],["font","The `font::Id` and `font::Map` types."],["glyph","Logic and types specific to individual glyph layout."],["line","Text handling logic related to individual lines of text."],["rt","Re-exported RustType geometrical types."]],"struct":[["Glyph","A single glyph of a font. this may either be a thin wrapper referring to the font and the glyph id, or it may be a standalone glyph that owns the data needed by it."],["GlyphCache","An implementation of a dynamic GPU glyph cache. See the module documentation for more information."],["GlyphId","Represents a glyph identifier for a particular font. This identifier will not necessarily correspond to the correct glyph in a font other than the one that it was obtained from."],["GlyphIter",""],["LayoutIter",""],["Lines","An iterator yielding each line within the given `text` as a new `&str`, where the start and end indices into each line are provided by the given iterator."],["Scale","Defines the size of a rendered face of a font, in pixels, horizontally and vertically. A vertical scale of `y` pixels means that the distance betwen the ascent and descent lines (see `VMetrics`) of the face will be `y` pixels. If `x` and `y` are equal the scaling is uniform. Non-uniform scaling by a factor *f* in the horizontal direction is achieved by setting `x` equal to *f* times `y`."]],"type":[["Font","The RustType `Font` type used by conrod."],["FontCollection","The RustType `FontCollection` type used by conrod."],["PositionedGlyph","The RustType `PositionedGlyph` type used by conrod."]]});
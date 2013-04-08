[{"name":"log","desc":"dirres2_log","xtype":"combo-boolean","options":[],"value":true,"lexicon":"directresize2:properties","overridden":false,"desc_trans":"Создает файл лога.","area":"","area_trans":"","menu":null},{"name":"opacity","desc":"dirres2_opacity","xtype":"numberfield","options":[],"value":"40","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Прозрачность","area":"","area_trans":"","menu":null},{"name":"slide_duration","desc":"dirres2_slide_duration","xtype":"numberfield","options":[],"value":"5000","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Длительность показа слайда","area":"","area_trans":"","menu":null},{"name":"exclude_dirs","desc":"dirres2_exclude_dirs","xtype":"textfield","options":[],"value":"assets/images/1","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Путь к директориям разделенных запятыми, в которых плагин работать не будет","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"exclude_dirs_children","desc":"dirres2_exclude_dirs_children","xtype":"combo-boolean","options":[],"value":false,"lexicon":"directresize2:properties","overridden":false,"desc_trans":"При \"ДА\" распространяет действие исключения родителя на дочерние директории","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"exclude_dirs_suffix","desc":"dirres2_exclude_dirs_suffix","xtype":"textfield","options":[],"value":"{ExChild}","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Cуффикс папки исключения, при наличии, которого дочерние папки исключаются. При этом exclude_dirs_children должен быть равен false","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"exclude_extensions","desc":"dirres2_exclude_extensions","xtype":"textfield","options":[],"value":"","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Перечисляются через запятую расширения файлов, которые не попадут под действие плагина","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"exclude_templates","desc":"dirres2_exclude_templates","xtype":"textfield","options":[],"value":"","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Перечислять через запятую ID шаблонов, в которых данный плагин НЕ работает","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"exclude_text_in_elements","desc":"dirres2_exclude_text_in_elements","xtype":"textfield","options":[],"value":"noresize","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Исключает из проверки изображения которые содержат данный текст в элементах alt, class, id, tittle","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"templates","desc":"dirres2_templates","xtype":"textfield","options":[],"value":"25,23,28,24","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Перечислять через запятую ID шаблонов, в которых данный плагин работает","area":"Exclusion settings","area_trans":"Exclusion settings","menu":null},{"name":"insert_expander","desc":"dirres2_insert_expander","xtype":"combo-boolean","options":[],"value":true,"lexicon":"directresize2:properties","overridden":false,"desc_trans":"Вставить в код файлы jquery.js, colorbox.js и т.д. необходимые для работы компонента","area":"Expander code","area_trans":"Expander code","menu":null},{"name":"insert_expander_css","desc":"dirres2_insert_expander_css","xtype":"combo-boolean","options":[],"value":true,"lexicon":"directresize2:properties","overridden":false,"desc_trans":"Вставить файлы стилей для работы компонента","area":"Expander code","area_trans":"Expander code","menu":null},{"name":"insert_expander_js","desc":"dirres2_insert_expander_js","xtype":"combo-boolean","options":[],"value":true,"lexicon":"directresize2:properties","overridden":false,"desc_trans":"Вставить вспомогательные JS для работы компонента","area":"Expander code","area_trans":"Expander code","menu":null},{"name":"expander","desc":"dirres2_expander","xtype":"list","options":[{"text":"HighSlide","value":"highslide","name":"HighSlide"},{"text":"Colorbox","value":"colorbox","name":"Colorbox"},{"text":"prettyPhoto","value":"prettyphoto","name":"prettyPhoto"}],"value":"colorbox","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Выберите тип Lightbox-а","area":"Lightbox","area_trans":"Lightbox","menu":null},{"name":"max_height","desc":"dirres2_max_height","xtype":"numberfield","options":[],"value":"600","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Высота окна","area":"Lightbox","area_trans":"Lightbox","menu":null},{"name":"max_width","desc":"dirres2_max_width","xtype":"numberfield","options":[],"value":"800","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Ширина окна","area":"Lightbox","area_trans":"Lightbox","menu":null},{"name":"slideshow","desc":"dirres2_slideshow","xtype":"combo-boolean","options":[],"value":"","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Включить слайдшоу?","area":"Lightbox","area_trans":"Lightbox","menu":null},{"name":"style","desc":"dirres2_style","xtype":"list","options":[{"text":"Style1","value":"style1","name":"Style1"},{"text":"Style2","value":"style2","name":"Style2"},{"text":"Style3","value":"style3","name":"Style3"},{"text":"Style4","value":"style4","name":"Style4"},{"text":"Style5","value":"style5","name":"Style5"}],"value":"","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Файл стилей css модуля colorbox.","area":"Lightbox: Colorbox","area_trans":"Lightbox: Colorbox","menu":null},{"name":"transition","desc":"dirres2_transition","xtype":"list","options":[{"text":"Elastic","value":"elastic","name":"Elastic"},{"text":"Fade","value":"fade","name":"Fade"},{"text":"None","value":"none","name":"None"}],"value":"elastic","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Тип перехода. Can be set to \"elastic\", \"fade\", or \"none\".","area":"Lightbox: Colorbox","area_trans":"Lightbox: Colorbox","menu":null},{"name":"caption_position","desc":"dirres2_caption_position","xtype":"list","options":[{"text":"Above image","value":"above","name":"Above image"},{"text":"Top of image","value":"top","name":"Top of image"},{"text":"Lefthand panel","value":"leftpanel","name":"Lefthand panel"},{"text":"Middle of image","value":"middle","name":"Middle of image"},{"text":"Righthand panel","value":"rightpanel","name":"Righthand panel"},{"text":"Bottom","value":"bottom","name":"Bottom"},{"text":"Below","value":"below","name":"Below"}],"value":"below","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Положение описания","area":"Lightbox: Highslide","area_trans":"Lightbox: Highslide","menu":null},{"name":"caption_source","desc":"dirres2_caption_source","xtype":"list","options":[{"text":"Image Alt text","value":"this.thumb.alt","name":"Image Alt text"},{"text":"Image title text","value":"this.thumb.title","name":"Image title text"},{"text":"Image anchor title","value":"this.a.title","name":"Image anchor title"}],"value":"this.thumb.title","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Источник описания","area":"Lightbox: Highslide","area_trans":"Lightbox: Highslide","menu":null},{"name":"large_caption","desc":"dirres2_large_caption","xtype":"numberfield","options":[],"value":"120","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Размер описания","area":"Lightbox: Highslide","area_trans":"Lightbox: Highslide","menu":null},{"name":"outline_type","desc":"dirres2_outline_type","xtype":"list","options":[{"text":"Rounded white corners","value":"rounded-white","name":"Rounded white corners"},{"text":"None","value":"null","name":"None"},{"text":"Outer glow","value":"outer-glow","name":"Outer glow"},{"text":"Glossy dark","value":"glossy-dark","name":"Glossy dark"},{"text":"Rounded black corners","value":"rounded-black","name":"Rounded black corners"},{"text":"Beveled","value":"beveled","name":"Beveled"},{"text":"Drop shadow","value":"drop-shadow","name":"Drop shadow"}],"value":"rounded-white","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Тип внешней линии","area":"Lightbox: Highslide","area_trans":"Lightbox: Highslide","menu":null},{"name":"theme","desc":"dirres2_theme","xtype":"list","options":[{"text":"Default","value":"pp_default","name":"Default"},{"text":"Dark rounded","value":"dark_rounded","name":"Dark rounded"},{"text":"Dark square","value":"dark_square","name":"Dark square"},{"text":"Light rounded","value":"light_rounded","name":"Light rounded"},{"text":"Light square","value":"light_square","name":"Light square"},{"text":"Facebook","value":"facebook","name":"Facebook"}],"value":"pp_default","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Тема","area":"Lightbox: PrettyPhoto","area_trans":"Lightbox: PrettyPhoto","menu":null},{"name":"default_thumb_path","desc":"dirres2_default_thumb_path","xtype":"textfield","options":[],"value":"","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Путь расположения файлов превью, если он указан, то параметр \"thumbnail_dir\" игнорируется","area":"Thumbnail","area_trans":"Thumbnail","menu":null},{"name":"rewrite_image_on_exist","desc":"dirres2_rewrite_image_on_exist","xtype":"combo-boolean","options":[],"value":true,"lexicon":"directresize2:properties","overridden":false,"desc_trans":"Переписывать файлы эскизов если они существуют","area":"Thumbnail","area_trans":"Thumbnail","menu":null},{"name":"thumb_key","desc":"dirres2_thumb_key","xtype":"textfield","options":[],"value":"_thumb","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Текст добавляется в имя файла предпросмотра","area":"Thumbnail","area_trans":"Thumbnail","menu":null},{"name":"thumb_param","desc":"dirres2_thumb_param","xtype":"textfield","options":[],"value":"'zc'=1,'bg'='#fff','q'=80","lexicon":"directresize2:properties","overridden":false,"desc_trans":"Параметры создания превью на основе phpThumbOf, пример: \"zc\"=1,\"bg\"=\"#fff\",\"q\"=80\nОсновные параметры:\n\tw - ширина превью, по-умолчанию берется из ширины измененного изображения,\n\th - высота превью, по-умолчанию берется из высоты измененного изображения,\n\tq - качество сжатия изображения (100 - наилучшее)\n\tzc=1 - обрезка изображения с точными размерами (w=120&h=120&zc=1)\n\tfltr[]=blur|10 - размытие\n\tfltr[]=gray - градация серого и т.д. \n","area":"Thumbnail","area_trans":"Thumbnail","menu":null},{"name":"thumbnail_dir","desc":"dirres2_thumbnail_dir","xtype":"textfield","options":[],"value":"thumbs","lexicon":"","overridden":false,"desc_trans":"Создает папку превью с данным именем в папке из которой берется файл. При условии что параметр \"default_thumb_path\" не указан.","area":"Thumbnail","area_trans":"Thumbnail","menu":null}]
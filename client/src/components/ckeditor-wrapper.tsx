import { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

interface CKEditorWrapperProps {
  initialData: string;
  onChange?: (html: string) => void;
  onReady?: (editor: any) => void;
}

export default function CKEditorWrapper({ initialData, onChange, onReady }: CKEditorWrapperProps) {
  const editorRef = useRef<any>(null);
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const darkContentStyle = isDark
    ? "body { background-color: #1a1a2e; color: #e0e0e0; } blockquote { color: #b0b0b0; border-left-color: #555; }"
    : "";

  return (
    <div className="tinymce-legal" data-testid="ckeditor-container">
      <Editor
        key={isDark ? "dark" : "light"}
        tinymceScriptSrc="/tinymce/tinymce.min.js"
        licenseKey="gpl"
        initialValue={initialData}
        onInit={(_evt, editor) => {
          editorRef.current = editor;
          if (onReady) {
            const wrappedEditor = {
              getData: () => editor.getContent(),
              setData: (html: string) => editor.setContent(html),
              _tinymce: editor,
            };
            onReady(wrappedEditor);
          }
        }}
        onEditorChange={(content) => {
          if (onChange) onChange(content);
        }}
        init={{
          language: "pt_BR",
          language_url: "/tinymce/langs/pt_BR.js",
          height: 500,
          menubar: "file edit view insert format table",
          skin: isDark ? "oxide-dark" : "oxide",
          skin_url: isDark ? "/tinymce/skins/ui/oxide-dark" : "/tinymce/skins/ui/oxide",
          content_css: isDark ? "/tinymce/skins/content/dark/content.min.css" : "/tinymce/skins/content/default/content.min.css",
          plugins: [
            "advlist", "autolink", "lists", "link", "charmap",
            "preview", "anchor", "searchreplace", "visualblocks",
            "code", "fullscreen", "insertdatetime", "table",
            "wordcount", "pagebreak", "nonbreaking",
          ],
          toolbar: [
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough",
            "forecolor backcolor | alignleft aligncenter alignright alignjustify | lineheight | citacao recuo4cm | bullist numlist | blockquote | insertTable link pagebreak | removeformat searchreplace | fullscreen",
          ],
          font_family_formats: [
            "Arial=Arial,Helvetica,sans-serif",
            "Times New Roman=Times New Roman,Times,serif",
            "Courier New=Courier New,Courier,monospace",
            "Georgia=Georgia,serif",
            "Verdana=Verdana,Geneva,sans-serif",
            "Calibri=Calibri,sans-serif",
            "Garamond=Garamond,serif",
            "Trebuchet MS=Trebuchet MS,sans-serif",
            "Tahoma=Tahoma,sans-serif",
          ].join(";"),
          font_size_formats: "8pt 9pt 10pt 11pt 12pt 13pt 14pt 16pt 18pt 20pt 24pt 28pt 32pt 36pt 48pt",
          line_height_formats: "1 1.15 1.25 1.5 1.75 2 2.5 3",
          block_formats: "Parágrafo=p; Título 1=h1; Título 2=h2; Título 3=h3; Título 4=h4",
          indentation: "40px",
          content_style: `
            body {
              font-family: 'Times New Roman', Times, serif;
              font-size: 12pt;
              line-height: 1.5;
              padding: 20px 30px;
              max-width: 100%;
            }
            p { margin: 0 0 6pt 0; text-indent: 0; }
            p.recuo-abnt { text-indent: 1.25cm; text-align: justify; }
            p.recuo-4cm { margin-left: 4cm !important; text-align: justify; font-size: 10pt; line-height: 1.0; }
            .citacao-juridica {
              margin: 12px 0 12px 4cm;
              padding: 0;
              font-size: 10pt;
              line-height: 1.0;
              font-style: normal;
              text-align: justify;
            }
            blockquote {
              margin: 12px 0 12px 4cm;
              padding: 0;
              font-size: 10pt;
              line-height: 1.0;
              font-style: normal;
              text-align: justify;
              border-left: none;
              color: #333;
            }
            table { border-collapse: collapse; width: 100%; }
            table td, table th { border: 1px solid #ccc; padding: 6px 8px; }
            h1 { font-size: 16pt; font-weight: bold; text-align: center; margin: 12pt 0; }
            h2 { font-size: 14pt; font-weight: bold; margin: 10pt 0; }
            h3 { font-size: 13pt; font-weight: bold; margin: 8pt 0; }
            h4 { font-size: 12pt; font-weight: bold; margin: 6pt 0; }
            ${darkContentStyle}
          `,
          paste_as_text: false,
          paste_retain_style_properties: "all",
          paste_word_valid_elements: "b,strong,i,em,u,s,p,br,div,span,table,tr,td,th,thead,tbody,ol,ul,li,h1,h2,h3,h4,h5,h6,blockquote,a,img,sub,sup",
          browser_spellcheck: true,
          contextmenu: false,
          promotion: false,
          branding: false,
          resize: true,
          statusbar: true,
          elementpath: true,
          mobile: {
            toolbar_mode: "scrolling",
          },
          toolbar_mode: "wrap",
          formats: {
            citacaoFormat: {
              block: "div",
              classes: "citacao-juridica",
              wrapper: false,
            },
            recuoAbnt: {
              block: "p",
              classes: "recuo-abnt",
              wrapper: false,
            },
          },
          setup: (editor: any) => {
            // Garante que o conteúdo seja persistido no localStorage a cada mudança
            editor.on("Change", () => {
              const content = editor.getContent();
              localStorage.setItem("legal_assistant_temp_editor_content", content);
            });

            editor.ui.registry.addToggleButton("citacao", {
              text: "Citação",
              tooltip: "Citação jurídica (recuo 4cm, fonte 10pt, espaçamento simples)",
              onAction: () => {
                const node = editor.selection.getNode();
                const isCitacao = node.classList?.contains("citacao-juridica") ||
                  node.closest?.(".citacao-juridica");

                if (isCitacao) {
                  const citNode = node.classList?.contains("citacao-juridica") ? node : node.closest(".citacao-juridica");
                  if (citNode) {
                    const p = editor.dom.create("p", {}, citNode.innerHTML);
                    editor.dom.replace(p, citNode);
                    editor.selection.setCursorLocation(p, 0);
                  }
                } else {
                  const selectedHtml = editor.selection.getContent({ format: "html" }) || "&nbsp;";
                  const div = `<div class="citacao-juridica">${selectedHtml}</div>`;
                  editor.selection.setContent(div);
                }
              },
              onSetup: (api: any) => {
                const nodeChangeHandler = () => {
                  const node = editor.selection.getNode();
                  const isCitacao = node.classList?.contains("citacao-juridica") ||
                    !!node.closest?.(".citacao-juridica");
                  api.setActive(isCitacao);
                };
                editor.on("NodeChange", nodeChangeHandler);
                return () => editor.off("NodeChange", nodeChangeHandler);
              },
            });

            editor.ui.registry.addToggleButton("recuoabnt", {
              text: "Recuo 4",
              tooltip: "Recuo de parágrafo ABNT (4cm na primeira linha)",
              onAction: () => {
                const node = editor.selection.getNode();
                const block = editor.dom.getParent(node, "p,div") || node;
                if (block && block.nodeName === "P") {
                  if (block.classList.contains("recuo-abnt")) {
                    editor.dom.removeClass(block, "recuo-abnt");
                  } else {
                    editor.dom.addClass(block, "recuo-abnt");
                  }
                } else {
                  editor.formatter.toggle("recuoAbnt");
                }
              },
              onSetup: (api: any) => {
                const nodeChangeHandler = () => {
                  const node = editor.selection.getNode();
                  const block = editor.dom.getParent(node, "p,div") || node;
                  api.setActive(block?.classList?.contains("recuo-abnt") || false);
                };
                editor.on("NodeChange", nodeChangeHandler);
                return () => editor.off("NodeChange", nodeChangeHandler);
              },
            });

            editor.ui.registry.addToggleButton("recuo4cm", {
              text: "Citação 4cm",
              tooltip: "Recuo de 4cm (para citações longas)",
              onAction: () => {
                const node = editor.selection.getNode();
                const block = editor.dom.getParent(node, "p,div") || node;
                if (block && (block.nodeName === "P" || block.nodeName === "DIV")) {
                  if (block.classList.contains("recuo-4cm")) {
                    editor.dom.removeClass(block, "recuo-4cm");
                  } else {
                    editor.dom.addClass(block, "recuo-4cm");
                  }
                }
              },
              onSetup: (api: any) => {
                const nodeChangeHandler = () => {
                  const node = editor.selection.getNode();
                  const block = editor.dom.getParent(node, "p,div") || node;
                  api.setActive(block?.classList?.contains("recuo-4cm") || false);
                };
                editor.on("NodeChange", nodeChangeHandler);
                return () => editor.off("NodeChange", nodeChangeHandler);
              },
            });

            editor.on("init", () => {
              const container = editor.getContainer();
              if (container) {
                container.style.borderRadius = "8px";
                container.style.overflow = "hidden";
              }
            });
          },
        }}
      />
    </div>
  );
}

# PLANO DO PROJETO: Projeto Profissional Full-Stack + Neon DB

> Gerado automaticamente pelo SK Code Editor em 23/06/2026, 04:01:35
> **390 arquivo(s)** | **~115.583 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Full-Stack (React + Express)
- **Frontend / Stack principal:** React + Vite, TypeScript, Tailwind CSS, Python
- **Backend / Dados:** Node.js + Express, PostgreSQL, Drizzle ORM
- **Versao:** 1.0.0

**Para rodar o projeto:**
```bash
npm install && npm run dev
```

---

## ESTRUTURA DE ARQUIVOS

```
Projeto Profissional Full-Stack + Neon DB/
├── client/
│   ├── public/
│   │   ├── tinymce/
│   │   │   ├── icons/
│   │   │   │   └── default/
│   │   │   │       ├── icons.js
│   │   │   │       ├── icons.min.js
│   │   │   │       └── index.js
│   │   │   ├── langs/
│   │   │   │   └── pt_BR.js
│   │   │   ├── models/
│   │   │   │   └── dom/
│   │   │   │       ├── index.js
│   │   │   │       ├── model.js
│   │   │   │       └── model.min.js
│   │   │   ├── plugins/
│   │   │   │   ├── accordion/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── advlist/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── anchor/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── autolink/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── autoresize/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── autosave/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── charmap/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── code/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── codesample/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── directionality/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── emoticons/
│   │   │   │   │   ├── js/
│   │   │   │   │   │   ├── emojiimages.js
│   │   │   │   │   │   ├── emojiimages.min.js
│   │   │   │   │   │   ├── emojis.js
│   │   │   │   │   │   └── emojis.min.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── fullscreen/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── help/
│   │   │   │   │   ├── js/
│   │   │   │   │   │   └── i18n/
│   │   │   │   │   │       └── keynav/
│   │   │   │   │   │           ├── ar.js
│   │   │   │   │   │           ├── bg_BG.js
│   │   │   │   │   │           ├── bg-BG.js
│   │   │   │   │   │           ├── ca.js
│   │   │   │   │   │           ├── cs.js
│   │   │   │   │   │           ├── da.js
│   │   │   │   │   │           ├── de.js
│   │   │   │   │   │           ├── el.js
│   │   │   │   │   │           ├── en.js
│   │   │   │   │   │           ├── es.js
│   │   │   │   │   │           ├── eu.js
│   │   │   │   │   │           ├── fa.js
│   │   │   │   │   │           ├── fi.js
│   │   │   │   │   │           ├── fr_FR.js
│   │   │   │   │   │           ├── fr-FR.js
│   │   │   │   │   │           ├── he_IL.js
│   │   │   │   │   │           ├── he-IL.js
│   │   │   │   │   │           ├── hi.js
│   │   │   │   │   │           ├── hr.js
│   │   │   │   │   │           ├── hu_HU.js
│   │   │   │   │   │           ├── hu-HU.js
│   │   │   │   │   │           ├── id.js
│   │   │   │   │   │           ├── it.js
│   │   │   │   │   │           ├── ja.js
│   │   │   │   │   │           ├── kk.js
│   │   │   │   │   │           ├── ko_KR.js
│   │   │   │   │   │           ├── ko-KR.js
│   │   │   │   │   │           ├── ms.js
│   │   │   │   │   │           ├── nb_NO.js
│   │   │   │   │   │           ├── nb-NO.js
│   │   │   │   │   │           ├── nl.js
│   │   │   │   │   │           ├── pl.js
│   │   │   │   │   │           ├── pt_BR.js
│   │   │   │   │   │           ├── pt_PT.js
│   │   │   │   │   │           ├── pt-BR.js
│   │   │   │   │   │           ├── pt-PT.js
│   │   │   │   │   │           ├── ro.js
│   │   │   │   │   │           ├── ru.js
│   │   │   │   │   │           ├── sk.js
│   │   │   │   │   │           ├── sl_SI.js
│   │   │   │   │   │           ├── sl-SI.js
│   │   │   │   │   │           ├── sv_SE.js
│   │   │   │   │   │           ├── sv-SE.js
│   │   │   │   │   │           ├── th_TH.js
│   │   │   │   │   │           ├── th-TH.js
│   │   │   │   │   │           ├── tr.js
│   │   │   │   │   │           ├── uk.js
│   │   │   │   │   │           ├── vi.js
│   │   │   │   │   │           ├── zh_CN.js
│   │   │   │   │   │           ├── zh_TW.js
│   │   │   │   │   │           ├── zh-CN.js
│   │   │   │   │   │           └── zh-TW.js
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── image/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── importcss/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── insertdatetime/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── link/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── lists/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── media/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── nonbreaking/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── pagebreak/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── preview/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── quickbars/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── save/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── searchreplace/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── table/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── visualblocks/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   ├── visualchars/
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── plugin.js
│   │   │   │   │   └── plugin.min.js
│   │   │   │   └── wordcount/
│   │   │   │       ├── index.js
│   │   │   │       ├── plugin.js
│   │   │   │       └── plugin.min.js
│   │   │   ├── skins/
│   │   │   │   ├── content/
│   │   │   │   │   ├── dark/
│   │   │   │   │   │   ├── content.css
│   │   │   │   │   │   ├── content.js
│   │   │   │   │   │   ├── content.min.css
│   │   │   │   │   │   ├── content.min.ts
│   │   │   │   │   │   └── content.ts
│   │   │   │   │   ├── default/
│   │   │   │   │   │   ├── content.css
│   │   │   │   │   │   ├── content.js
│   │   │   │   │   │   ├── content.min.css
│   │   │   │   │   │   ├── content.min.ts
│   │   │   │   │   │   └── content.ts
│   │   │   │   │   ├── document/
│   │   │   │   │   │   ├── content.css
│   │   │   │   │   │   ├── content.js
│   │   │   │   │   │   ├── content.min.css
│   │   │   │   │   │   ├── content.min.ts
│   │   │   │   │   │   └── content.ts
│   │   │   │   │   ├── tinymce-5/
│   │   │   │   │   │   ├── content.css
│   │   │   │   │   │   ├── content.js
│   │   │   │   │   │   ├── content.min.css
│   │   │   │   │   │   ├── content.min.ts
│   │   │   │   │   │   └── content.ts
│   │   │   │   │   ├── tinymce-5-dark/
│   │   │   │   │   │   ├── content.css
│   │   │   │   │   │   ├── content.js
│   │   │   │   │   │   ├── content.min.css
│   │   │   │   │   │   ├── content.min.ts
│   │   │   │   │   │   └── content.ts
│   │   │   │   │   └── writer/
│   │   │   │   │       ├── content.css
│   │   │   │   │       ├── content.js
│   │   │   │   │       ├── content.min.css
│   │   │   │   │       ├── content.min.ts
│   │   │   │   │       └── content.ts
│   │   │   │   └── ui/
│   │   │   │       ├── oxide/
│   │   │   │       │   ├── content.css
│   │   │   │       │   ├── content.inline.css
│   │   │   │       │   ├── content.inline.js
│   │   │   │       │   ├── content.inline.min.css
│   │   │   │       │   ├── content.inline.min.ts
│   │   │   │       │   ├── content.inline.ts
│   │   │   │       │   ├── content.js
│   │   │   │       │   ├── content.min.css
│   │   │   │       │   ├── content.min.ts
│   │   │   │       │   ├── content.ts
│   │   │   │       │   ├── skin.css
│   │   │   │       │   ├── skin.js
│   │   │   │       │   ├── skin.min.css
│   │   │   │       │   ├── skin.min.ts
│   │   │   │       │   ├── skin.shadowdom.css
│   │   │   │       │   ├── skin.shadowdom.js
│   │   │   │       │   ├── skin.shadowdom.min.css
│   │   │   │       │   ├── skin.shadowdom.min.ts
│   │   │   │       │   ├── skin.shadowdom.ts
│   │   │   │       │   └── skin.ts
│   │   │   │       ├── oxide-dark/
│   │   │   │       │   ├── content.css
│   │   │   │       │   ├── content.inline.css
│   │   │   │       │   ├── content.inline.js
│   │   │   │       │   ├── content.inline.min.css
│   │   │   │       │   ├── content.inline.min.ts
│   │   │   │       │   ├── content.inline.ts
│   │   │   │       │   ├── content.js
│   │   │   │       │   ├── content.min.css
│   │   │   │       │   ├── content.min.ts
│   │   │   │       │   ├── content.ts
│   │   │   │       │   ├── skin.css
│   │   │   │       │   ├── skin.js
│   │   │   │       │   ├── skin.min.css
│   │   │   │       │   ├── skin.min.ts
│   │   │   │       │   ├── skin.shadowdom.css
│   │   │   │       │   ├── skin.shadowdom.js
│   │   │   │       │   ├── skin.shadowdom.min.css
│   │   │   │       │   ├── skin.shadowdom.min.ts
│   │   │   │       │   ├── skin.shadowdom.ts
│   │   │   │       │   └── skin.ts
│   │   │   │       ├── tinymce-5/
│   │   │   │       │   ├── content.css
│   │   │   │       │   ├── content.inline.css
│   │   │   │       │   ├── content.inline.js
│   │   │   │       │   ├── content.inline.min.css
│   │   │   │       │   ├── content.inline.min.ts
│   │   │   │       │   ├── content.inline.ts
│   │   │   │       │   ├── content.js
│   │   │   │       │   ├── content.min.css
│   │   │   │       │   ├── content.min.ts
│   │   │   │       │   ├── content.ts
│   │   │   │       │   ├── skin.css
│   │   │   │       │   ├── skin.js
│   │   │   │       │   ├── skin.min.css
│   │   │   │       │   ├── skin.min.ts
│   │   │   │       │   ├── skin.shadowdom.css
│   │   │   │       │   ├── skin.shadowdom.js
│   │   │   │       │   ├── skin.shadowdom.min.css
│   │   │   │       │   ├── skin.shadowdom.min.ts
│   │   │   │       │   ├── skin.shadowdom.ts
│   │   │   │       │   └── skin.ts
│   │   │   │       └── tinymce-5-dark/
│   │   │   │           ├── content.css
│   │   │   │           ├── content.inline.css
│   │   │   │           ├── content.inline.js
│   │   │   │           ├── content.inline.min.css
│   │   │   │           ├── content.inline.min.ts
│   │   │   │           ├── content.inline.ts
│   │   │   │           ├── content.js
│   │   │   │           ├── content.min.css
│   │   │   │           ├── content.min.ts
│   │   │   │           ├── content.ts
│   │   │   │           ├── skin.css
│   │   │   │           ├── skin.js
│   │   │   │           ├── skin.min.css
│   │   │   │           ├── skin.min.ts
│   │   │   │           ├── skin.shadowdom.css
│   │   │   │           ├── skin.shadowdom.js
│   │   │   │           ├── skin.shadowdom.min.css
│   │   │   │           ├── skin.shadowdom.min.ts
│   │   │   │           ├── skin.shadowdom.ts
│   │   │   │           └── skin.ts
│   │   │   ├── themes/
│   │   │   │   └── silver/
│   │   │   │       ├── index.js
│   │   │   │       └── theme.min.js
│   │   │   ├── bower.json
│   │   │   ├── CHANGELOG.md
│   │   │   ├── composer.json
│   │   │   ├── license.md
│   │   │   ├── notices.txt
│   │   │   ├── package.json
│   │   │   ├── README.md
│   │   │   ├── tinymce.d.ts
│   │   │   └── tinymce.min.js
│   │   ├── auditoria.html
│   │   ├── codigo-formatacao.txt
│   │   ├── comparador.html
│   │   ├── manifest.json
│   │   └── sw.js
│   ├── replit_integrations/
│   │   └── audio/
│   │       ├── audio-playback-worklet.js
│   │       ├── audio-utils.ts
│   │       ├── index.ts
│   │       ├── useAudioPlayback.ts
│   │       ├── useVoiceRecorder.ts
│   │       └── useVoiceStream.ts
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-otp.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── ckeditor-wrapper.tsx
│   │   │   ├── pwa-install.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── tiptap-editor.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── queryClient.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── auditoria-financeira.tsx
│   │   │   ├── comparador-juridico.tsx
│   │   │   ├── consulta-corporativo.tsx
│   │   │   ├── consulta-pdpj.tsx
│   │   │   ├── consulta-processual.tsx
│   │   │   ├── filtrador.tsx
│   │   │   ├── legal-assistant.tsx
│   │   │   ├── legal-assistant.tsx.recovered
│   │   │   ├── login.tsx
│   │   │   ├── not-found.tsx
│   │   │   ├── painel-processos.tsx
│   │   │   ├── playground.tsx
│   │   │   ├── previdenciario.tsx
│   │   │   ├── token-generator.tsx
│   │   │   └── tramitacao.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   └── index.html
├── public/
│   └── auditoria.html
├── script/
│   └── build.ts
├── server/
│   ├── replit_integrations/
│   │   ├── audio/
│   │   │   ├── client.ts
│   │   │   ├── index.ts
│   │   │   └── routes.ts
│   │   ├── batch/
│   │   │   ├── index.ts
│   │   │   └── utils.ts
│   │   ├── chat/
│   │   │   ├── index.ts
│   │   │   ├── routes.ts
│   │   │   └── storage.ts
│   │   └── image/
│   │       ├── client.ts
│   │       ├── index.ts
│   │       └── routes.ts
│   ├── index.ts
│   ├── routes.ts
│   ├── static.ts
│   ├── storage.ts
│   └── vite.ts
├── shared/
│   ├── models/
│   │   └── chat.ts
│   └── schema.ts
├── .gitignore
├── .replit
├── components.json
├── drizzle.config.ts
├── fix_buttons.txt
├── main.py
├── package.json
├── postcss.config.js
├── pyproject.toml
├── replit.md
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React + Vite, TypeScript, Tailwind CSS, Python
- **Backend:** Node.js + Express, PostgreSQL, Drizzle ORM
- **Todos os pacotes (120):** @google/genai, @hookform/resolvers, @jridgewell/trace-mapping, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-tabs, @radix-ui/react-toast, @radix-ui/react-toggle, @radix-ui/react-toggle-group, @radix-ui/react-tooltip, @tanstack/react-query, @tinymce/tinymce-react, @tiptap/extension-color, @tiptap/extension-font-family, @tiptap/extension-highlight, @tiptap/extension-link, @tiptap/extension-table, @tiptap/extension-table-cell, @tiptap/extension-table-header, @tiptap/extension-table-row, @tiptap/extension-text-align, @tiptap/extension-text-style, @tiptap/extension-underline, @tiptap/pm, @tiptap/react, @tiptap/starter-kit, @types/jsonwebtoken, @types/multer, adm-zip, class-variance-authority, clsx, cmdk, connect-pg-simple, date-fns, docx, drizzle-orm, drizzle-zod, embla-carousel-react, express, express-session, framer-motion, html-entities, input-otp, jsonwebtoken, lucide-react, mammoth, memorystore, multer, next-themes, openai, p-limit, p-retry, passport, passport-local, pdf-parse, pdfjs-dist, pg, postcss-selector-parser, quill, react, react-day-picker, react-dom, react-hook-form, react-icons, react-quill, react-resizable-panels, recharts, tailwind-merge, tailwindcss-animate, tinymce, tinymce-i18n, tw-animate-css, vaul, wouter, ws, zod, zod-validation-error, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner, @replit/vite-plugin-runtime-error-modal, @tailwindcss/typography, @tailwindcss/vite, @types/connect-pg-simple, @types/express, @types/express-session, @types/node, @types/passport, @types/passport-local, @types/react, @types/react-dom, @types/ws, @vitejs/plugin-react, autoprefixer, drizzle-kit, esbuild, postcss, tailwindcss, tsx, typescript, vite

---

## ROTAS DA API (endpoints detectados automaticamente)

```
GET    /api/conversations  (em server/replit_integrations/audio/routes.ts)
GET    /api/conversations/:id  (em server/replit_integrations/audio/routes.ts)
POST   /api/conversations  (em server/replit_integrations/audio/routes.ts)
DELETE /api/conversations/:id  (em server/replit_integrations/audio/routes.ts)
POST   /api/conversations/:id/messages  (em server/replit_integrations/audio/routes.ts)
GET    /api/conversations  (em server/replit_integrations/chat/routes.ts)
GET    /api/conversations/:id  (em server/replit_integrations/chat/routes.ts)
POST   /api/conversations  (em server/replit_integrations/chat/routes.ts)
DELETE /api/conversations/:id  (em server/replit_integrations/chat/routes.ts)
POST   /api/conversations/:id/messages  (em server/replit_integrations/chat/routes.ts)
POST   /api/generate-image  (em server/replit_integrations/image/routes.ts)
GET    /sw.js  (em server/routes.ts)
GET    /api/auth/check  (em server/routes.ts)
POST   /api/auth/login  (em server/routes.ts)
POST   /api/auth/logout  (em server/routes.ts)
GET    /parecer/:id  (em server/routes.ts)
GET    /api/tjmg/fatores  (em server/routes.ts)
POST   /api/pdpj/test-connection  (em server/routes.ts)
GET    /api/pdpj/status  (em server/routes.ts)
POST   /api/pdpj/comunicacoes  (em server/routes.ts)
POST   /api/pdpj/representados  (em server/routes.ts)
POST   /api/pdpj/habilitacao  (em server/routes.ts)
POST   /api/pdpj/pessoa  (em server/routes.ts)
POST   /api/webhooks/tramitacao  (em server/routes.ts)
USE    /api  (em server/routes.ts)
POST   /api/share/parecer  (em server/routes.ts)
GET    /api/snippets  (em server/routes.ts)
GET    /api/snippets/:id  (em server/routes.ts)
POST   /api/snippets  (em server/routes.ts)
PATCH  /api/snippets/:id  (em server/routes.ts)
DELETE /api/snippets/:id  (em server/routes.ts)
GET    /api/custom-actions  (em server/routes.ts)
POST   /api/custom-actions  (em server/routes.ts)
PATCH  /api/custom-actions/:id  (em server/routes.ts)
DELETE /api/custom-actions/:id  (em server/routes.ts)
GET    /api/ementas  (em server/routes.ts)
POST   /api/ementas  (em server/routes.ts)
PATCH  /api/ementas/:id  (em server/routes.ts)
DELETE /api/ementas/:id  (em server/routes.ts)
POST   /api/jurisprudencia/buscar  (em server/routes.ts)
GET    /api/ai-history  (em server/routes.ts)
POST   /api/ai-history  (em server/routes.ts)
DELETE /api/ai-history/:id  (em server/routes.ts)
DELETE /api/ai-history  (em server/routes.ts)
GET    /api/prompt-templates  (em server/routes.ts)
POST   /api/prompt-templates  (em server/routes.ts)
PATCH  /api/prompt-templates/:id  (em server/routes.ts)
DELETE /api/prompt-templates/:id  (em server/routes.ts)
GET    /api/doc-templates  (em server/routes.ts)
POST   /api/doc-templates  (em server/routes.ts)
PATCH  /api/doc-templates/:id  (em server/routes.ts)
DELETE /api/doc-templates/:id  (em server/routes.ts)
POST   /api/doc-templates/upload-docx  (em server/routes.ts)
POST   /api/export/word-with-template  (em server/routes.ts)
POST   /api/import/url  (em server/routes.ts)
POST   /api/upload/extract-text  (em server/routes.ts)
POST   /api/upload/transcribe  (em server/routes.ts)
POST   /api/ai/process  (em server/routes.ts)
POST   /api/ai/refine  (em server/routes.ts)
POST   /api/export/word  (em server/routes.ts)
POST   /api/jwt/generate  (em server/routes.ts)
POST   /api/tts  (em server/routes.ts)
GET    /api/jwt/status  (em server/routes.ts)
GET    /api/processos  (em server/routes.ts)
GET    /api/processos/:id  (em server/routes.ts)
POST   /api/processos  (em server/routes.ts)
PATCH  /api/processos/:id  (em server/routes.ts)
DELETE /api/processos/:id  (em server/routes.ts)
POST   /api/datajud/consulta  (em server/routes.ts)
POST   /api/datajud/consulta-oab  (em server/routes.ts)
GET    /api/corporativo/advogado/cpf/:cpf  (em server/routes.ts)
GET    /api/corporativo/advogado/oab/:uf/:inscricao  (em server/routes.ts)
GET    /api/corporativo/magistrados/:tribunal  (em server/routes.ts)
GET    /api/pdpj/status  (em server/routes.ts)
POST   /api/pdpj/test-connection  (em server/routes.ts)
POST   /api/pdpj/comunicacoes  (em server/routes.ts)
POST   /api/pdpj/representados  (em server/routes.ts)
POST   /api/pdpj/habilitacao  (em server/routes.ts)
POST   /api/pdpj/pessoa  (em server/routes.ts)
GET    /api/datajud/tribunais  (em server/routes.ts)
GET    /api/settings/:key  (em server/routes.ts)
PUT    /api/settings/:key  (em server/routes.ts)
GET    /api/tramitacao/clientes  (em server/routes.ts)
POST   /api/tramitacao/clientes  (em server/routes.ts)
GET    /api/tramitacao/clientes/:id  (em server/routes.ts)
PATCH  /api/tramitacao/clientes/:id  (em server/routes.ts)
GET    /api/tramitacao/notas  (em server/routes.ts)
POST   /api/tramitacao/notas  (em server/routes.ts)
DELETE /api/tramitacao/notas/:id  (em server/routes.ts)
GET    /api/tramitacao/usuarios  (em server/routes.ts)
GET    /api/tramitacao/test  (em server/routes.ts)
GET    /api/tramitacao/publicacoes  (em server/routes.ts)
POST   /api/tramitacao/sync-publicacoes  (em server/routes.ts)
PATCH  /api/tramitacao/publicacoes/:id/lida  (em server/routes.ts)
POST   /api/code/run  (em server/routes.ts)
POST   /api/previdenciario/extrair  (em server/routes.ts)
USE    /{*path}  (em server/static.ts)
USE    /{*path}  (em server/vite.ts)
```

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run dev           # NODE_ENV=development tsx server/index.ts
npm run build         # tsx script/build.ts
npm run start         # NODE_ENV=production node dist/index.cjs
npm run check         # tsc
npm run db:push       # drizzle-kit push
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
DATABASE_URL=seu_valor_aqui
SESSION_SECRET=seu_valor_aqui
PORT=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_API_KEY=seu_valor_aqui
AI_INTEGRATIONS_OPENAI_BASE_URL=seu_valor_aqui
APP_PASSWORD=seu_valor_aqui
AI_INTEGRATIONS_GEMINI_API_KEY=seu_valor_aqui
AI_INTEGRATIONS_GEMINI_BASE_URL=seu_valor_aqui
PDPJ_PEM_PRIVATE_KEY=seu_valor_aqui
DATAJUD_API_KEY=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `client/index.html` — Arquivo principal
- `client/public/tinymce/icons/default/index.js` — Arquivo principal
- `client/public/tinymce/models/dom/index.js` — Arquivo principal
- `client/public/tinymce/plugins/accordion/index.js` — Arquivo principal
- `client/public/tinymce/plugins/advlist/index.js` — Arquivo principal
- `client/public/tinymce/plugins/anchor/index.js` — Arquivo principal
- `client/public/tinymce/plugins/autolink/index.js` — Arquivo principal
- `client/public/tinymce/plugins/autoresize/index.js` — Arquivo principal
- `client/public/tinymce/plugins/autosave/index.js` — Arquivo principal
- `client/public/tinymce/plugins/charmap/index.js` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`.gitignore`** _(6 linhas)_
Lista de arquivos/pastas que o Git deve IGNORAR (nao versionar). Ex: node_modules, .env

**`.replit`** _(51 linhas)_
Arquivo REPLIT — parte do projeto.

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`drizzle.config.ts`** _(15 linhas)_
Configuracao do Drizzle ORM — gerencia a conexao e migracao do banco de dados.

**`fix_buttons.txt`** _(64 linhas)_
Arquivo TXT — parte do projeto.

**`main.py`** _(7 linhas)_
Arquivo Python — codigo de logica ou script de automacao.

**`package.json`** _(146 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`postcss.config.js`** _(7 linhas)_
Configuracao do PostCSS, necessaria para o Tailwind processar os estilos.

**`pyproject.toml`** _(9 linhas)_
Arquivo TOML — parte do projeto.

**`replit.md`** _(136 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`tailwind.config.ts`** _(108 linhas)_
Configuracao do Tailwind CSS — a biblioteca de estilos visuais usada no projeto.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(30 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `client/`
> Pasta 'client' — agrupamento de arquivos relacionados.

**`index.html`** _(23 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

---

### 📁 `public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`auditoria.html`** _(35 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `script/`
> Pasta 'script' — agrupamento de arquivos relacionados.

**`build.ts`** _(68 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `server/`
> Pasta 'server' — agrupamento de arquivos relacionados.

**`index.ts`** _(124 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(4272 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

**`static.ts`** _(20 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`storage.ts`** _(280 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vite.ts`** _(58 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `shared/`
> Pasta 'shared' — agrupamento de arquivos relacionados.

**`schema.ts`** _(187 linhas)_
Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).

---

### 📁 `client/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`auditoria.html`** _(259 linhas)_
Arquivo HTML — parte do projeto.

**`codigo-formatacao.txt`** _(123 linhas)_
Arquivo TXT — parte do projeto.

**`comparador.html`** _(494 linhas)_
Arquivo HTML — parte do projeto.

**`manifest.json`** _(25 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(19 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(164 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(512 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(12 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `shared/models/`
> Modelos de dados — representacao das tabelas do banco de dados.

**`chat.ts`** _(35 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/`
> Pasta 'tinymce' — agrupamento de arquivos relacionados.

**`CHANGELOG.md`** _(3946 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`README.md`** _(78 linhas)_
Documentacao principal do projeto. Explica o que o projeto faz e como rodar.

**`bower.json`** _(27 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`composer.json`** _(52 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`license.md`** _(10 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`notices.txt`** _(22 linhas)_
Arquivo TXT — parte do projeto.

**`package.json`** _(32 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tinymce.d.ts`** _(3414 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tinymce.min.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/replit_integrations/audio/`
> Pasta 'audio' — agrupamento de arquivos relacionados.

**`audio-playback-worklet.js`** _(113 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`audio-utils.ts`** _(37 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`index.ts`** _(46 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`useAudioPlayback.ts`** _(106 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'audioplayback'.

**`useVoiceRecorder.ts`** _(53 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicerecorder'.

**`useVoiceStream.ts`** _(92 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicestream'.

---

### 📁 `client/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`ckeditor-wrapper.tsx`** _(248 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`pwa-install.tsx`** _(86 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`theme-provider.tsx`** _(47 linhas)_
Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.

**`theme-toggle.tsx`** _(19 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tiptap-editor.tsx`** _(541 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

---

### 📁 `client/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `client/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`queryClient.ts`** _(58 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `client/src/pages/`
> Telas completas do app — cada arquivo aqui e uma pagina navegavel.

**`auditoria-financeira.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comparador-juridico.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-corporativo.tsx`** _(479 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-pdpj.tsx`** _(671 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-processual.tsx`** _(656 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`filtrador.tsx`** _(732 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx`** _(4880 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx.recovered`** _(2901 linhas)_
Arquivo RECOVERED — parte do projeto.

**`login.tsx`** _(100 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

**`not-found.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`painel-processos.tsx`** _(758 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`playground.tsx`** _(1498 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`previdenciario.tsx`** _(424 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`token-generator.tsx`** _(450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(822 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `server/replit_integrations/audio/`
> Pasta 'audio' — agrupamento de arquivos relacionados.

**`client.ts`** _(275 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`index.ts`** _(15 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(137 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

---

### 📁 `server/replit_integrations/batch/`
> Pasta 'batch' — agrupamento de arquivos relacionados.

**`index.ts`** _(8 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`utils.ts`** _(183 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `server/replit_integrations/chat/`
> Pasta 'chat' — agrupamento de arquivos relacionados.

**`index.ts`** _(4 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(119 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

**`storage.ts`** _(44 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `server/replit_integrations/image/`
> Pasta 'image' — agrupamento de arquivos relacionados.

**`client.ts`** _(60 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`index.ts`** _(4 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`routes.ts`** _(32 linhas)_
Arquivo de ROTAS — define as URLs/enderecos respondidos pelo servidor.

---

### 📁 `client/public/tinymce/langs/`
> Pasta 'langs' — agrupamento de arquivos relacionados.

**`pt_BR.js`** _(426 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(57 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(52 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(39 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button.tsx`** _(63 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(69 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(86 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(152 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(123 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(119 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(199 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`form.tsx`** _(179 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(30 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(24 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`label.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(257 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(161 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(118 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(31 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `client/public/tinymce/icons/default/`
> Pasta 'default' — agrupamento de arquivos relacionados.

**`icons.js`** _(239 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`icons.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

---

### 📁 `client/public/tinymce/models/dom/`
> Pasta 'dom' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`model.js`** _(8981 linhas)_
Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).

**`model.min.js`** _(1 linha)_
Arquivo de MODELO — define a estrutura dos dados (tabelas, campos, tipos).

---

### 📁 `client/public/tinymce/plugins/accordion/`
> Pasta 'accordion' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(1374 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/advlist/`
> Pasta 'advlist' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(474 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/anchor/`
> Pasta 'anchor' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(238 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/autolink/`
> Pasta 'autolink' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(316 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/autoresize/`
> Pasta 'autoresize' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(222 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/autosave/`
> Pasta 'autosave' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(250 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/charmap/`
> Pasta 'charmap' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(998 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/code/`
> Pasta 'code' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(99 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/codesample/`
> Pasta 'codesample' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(3656 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(9 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/directionality/`
> Pasta 'directionality' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(635 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/emoticons/`
> Pasta 'emoticons' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(810 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/fullscreen/`
> Pasta 'fullscreen' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(1608 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/help/`
> Pasta 'help' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(827 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/image/`
> Pasta 'image' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(1692 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/importcss/`
> Pasta 'importcss' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(402 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/insertdatetime/`
> Pasta 'insertdatetime' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(188 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/link/`
> Pasta 'link' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(1710 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/lists/`
> Pasta 'lists' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(603 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/media/`
> Pasta 'media' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(1443 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/nonbreaking/`
> Pasta 'nonbreaking' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(129 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/pagebreak/`
> Pasta 'pagebreak' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(124 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/preview/`
> Pasta 'preview' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(844 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/quickbars/`
> Pasta 'quickbars' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(655 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/save/`
> Pasta 'save' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(137 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/searchreplace/`
> Pasta 'searchreplace' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(1368 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/table/`
> Pasta 'table' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(4009 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/visualblocks/`
> Pasta 'visualblocks' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(107 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/visualchars/`
> Pasta 'visualchars' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(809 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/wordcount/`
> Pasta 'wordcount' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`plugin.js`** _(481 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`plugin.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/themes/silver/`
> Pasta 'silver' — agrupamento de arquivos relacionados.

**`index.js`** _(7 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`theme.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/emoticons/js/`
> Pasta 'js' — agrupamento de arquivos relacionados.

**`emojiimages.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`emojiimages.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`emojis.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`emojis.min.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/content/dark/`
> Pasta 'dark' — agrupamento de arquivos relacionados.

**`content.css`** _(76 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/content/default/`
> Pasta 'default' — agrupamento de arquivos relacionados.

**`content.css`** _(71 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/content/document/`
> Pasta 'document' — agrupamento de arquivos relacionados.

**`content.css`** _(76 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/content/tinymce-5/`
> Pasta 'tinymce-5' — agrupamento de arquivos relacionados.

**`content.css`** _(71 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/content/tinymce-5-dark/`
> Pasta 'tinymce-5-dark' — agrupamento de arquivos relacionados.

**`content.css`** _(76 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/content/writer/`
> Pasta 'writer' — agrupamento de arquivos relacionados.

**`content.css`** _(72 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(4 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/ui/oxide/`
> Pasta 'oxide' — agrupamento de arquivos relacionados.

**`content.css`** _(1038 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.css`** _(1032 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.css`** _(5616 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.min.ts`** _(508 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.css`** _(31 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.min.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.ts`** _(508 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/ui/oxide-dark/`
> Pasta 'oxide-dark' — agrupamento de arquivos relacionados.

**`content.css`** _(1026 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.css`** _(1032 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.css`** _(5619 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.min.ts`** _(508 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.css`** _(31 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.min.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.ts`** _(508 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/ui/tinymce-5/`
> Pasta 'tinymce-5' — agrupamento de arquivos relacionados.

**`content.css`** _(1038 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.css`** _(1032 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.css`** _(5735 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.min.ts`** _(509 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.css`** _(31 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.min.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.ts`** _(509 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/skins/ui/tinymce-5-dark/`
> Pasta 'tinymce-5-dark' — agrupamento de arquivos relacionados.

**`content.css`** _(1026 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.css`** _(1032 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.inline.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.inline.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.js`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.min.css`** _(11 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`content.min.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`content.ts`** _(117 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.css`** _(5735 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.min.ts`** _(509 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.css`** _(31 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.js`** _(1 linha)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.min.css`** _(2 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`skin.shadowdom.min.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.shadowdom.ts`** _(10 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`skin.ts`** _(509 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `client/public/tinymce/plugins/help/js/i18n/keynav/`
> Pasta 'keynav' — agrupamento de arquivos relacionados.

**`ar.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`bg-BG.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`bg_BG.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ca.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`cs.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`da.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`de.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`el.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`en.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`es.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`eu.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`fa.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`fi.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`fr-FR.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`fr_FR.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`he-IL.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`he_IL.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`hi.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`hr.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`hu-HU.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`hu_HU.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`id.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`it.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ja.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`kk.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ko-KR.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ko_KR.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ms.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`nb-NO.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`nb_NO.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`nl.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pl.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pt-BR.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pt-PT.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pt_BR.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`pt_PT.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ro.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`ru.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`sk.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`sl-SI.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`sl_SI.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`sv-SE.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`sv_SE.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`th-TH.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`th_TH.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tr.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`uk.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`vi.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zh-CN.js`** _(87 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zh-TW.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zh_CN.js`** _(87 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zh_TW.js`** _(93 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: Projeto Profissional Full-Stack + Neon DB
Tipo: Full-Stack (React + Express)
Stack: React + Vite, TypeScript, Tailwind CSS, Python, Node.js + Express, PostgreSQL, Drizzle ORM
Arquivos: 390 | Linhas: ~115.583
Rotas API: 98 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: DATABASE_URL, SESSION_SECRET, PORT, AI_INTEGRATIONS_OPENAI_API_KEY, AI_INTEGRATIONS_OPENAI_BASE_URL, APP_PASSWORD, AI_INTEGRATIONS_GEMINI_API_KEY, AI_INTEGRATIONS_GEMINI_BASE_URL, PDPJ_PEM_PRIVATE_KEY, DATAJUD_API_KEY

Estrutura principal:
  .gitignore
  .replit
  client/index.html
  client/public/auditoria.html
  client/public/codigo-formatacao.txt
  client/public/comparador.html
  client/public/manifest.json
  client/public/sw.js
  client/public/tinymce/CHANGELOG.md
  client/public/tinymce/README.md
  client/public/tinymce/bower.json
  client/public/tinymce/composer.json
  client/public/tinymce/icons/default/icons.js
  client/public/tinymce/icons/default/icons.min.js
  client/public/tinymce/icons/default/index.js
  client/public/tinymce/langs/pt_BR.js
  client/public/tinymce/license.md
  client/public/tinymce/models/dom/index.js
  client/public/tinymce/models/dom/model.js
  client/public/tinymce/models/dom/model.min.js
  client/public/tinymce/notices.txt
  client/public/tinymce/package.json
  client/public/tinymce/plugins/accordion/index.js
  client/public/tinymce/plugins/accordion/plugin.js
  client/public/tinymce/plugins/accordion/plugin.min.js
  client/public/tinymce/plugins/advlist/index.js
  client/public/tinymce/plugins/advlist/plugin.js
  client/public/tinymce/plugins/advlist/plugin.min.js
  client/public/tinymce/plugins/anchor/index.js
  client/public/tinymce/plugins/anchor/plugin.js
  client/public/tinymce/plugins/anchor/plugin.min.js
  client/public/tinymce/plugins/autolink/index.js
  client/public/tinymce/plugins/autolink/plugin.js
  client/public/tinymce/plugins/autolink/plugin.min.js
  client/public/tinymce/plugins/autoresize/index.js
  client/public/tinymce/plugins/autoresize/plugin.js
  client/public/tinymce/plugins/autoresize/plugin.min.js
  client/public/tinymce/plugins/autosave/index.js
  client/public/tinymce/plugins/autosave/plugin.js
  client/public/tinymce/plugins/autosave/plugin.min.js
  client/public/tinymce/plugins/charmap/index.js
  client/public/tinymce/plugins/charmap/plugin.js
  client/public/tinymce/plugins/charmap/plugin.min.js
  client/public/tinymce/plugins/code/index.js
  client/public/tinymce/plugins/code/plugin.js
  client/public/tinymce/plugins/code/plugin.min.js
  client/public/tinymce/plugins/codesample/index.js
  client/public/tinymce/plugins/codesample/plugin.js
  client/public/tinymce/plugins/codesample/plugin.min.js
  client/public/tinymce/plugins/directionality/index.js
  client/public/tinymce/plugins/directionality/plugin.js
  client/public/tinymce/plugins/directionality/plugin.min.js
  client/public/tinymce/plugins/emoticons/index.js
  client/public/tinymce/plugins/emoticons/js/emojiimages.js
  client/public/tinymce/plugins/emoticons/js/emojiimages.min.js
  client/public/tinymce/plugins/emoticons/js/emojis.js
  client/public/tinymce/plugins/emoticons/js/emojis.min.js
  client/public/tinymce/plugins/emoticons/plugin.js
  client/public/tinymce/plugins/emoticons/plugin.min.js
  client/public/tinymce/plugins/fullscreen/index.js
  client/public/tinymce/plugins/fullscreen/plugin.js
  client/public/tinymce/plugins/fullscreen/plugin.min.js
  client/public/tinymce/plugins/help/index.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ar.js
  client/public/tinymce/plugins/help/js/i18n/keynav/bg-BG.js
  client/public/tinymce/plugins/help/js/i18n/keynav/bg_BG.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ca.js
  client/public/tinymce/plugins/help/js/i18n/keynav/cs.js
  client/public/tinymce/plugins/help/js/i18n/keynav/da.js
  client/public/tinymce/plugins/help/js/i18n/keynav/de.js
  client/public/tinymce/plugins/help/js/i18n/keynav/el.js
  client/public/tinymce/plugins/help/js/i18n/keynav/en.js
  client/public/tinymce/plugins/help/js/i18n/keynav/es.js
  client/public/tinymce/plugins/help/js/i18n/keynav/eu.js
  client/public/tinymce/plugins/help/js/i18n/keynav/fa.js
  client/public/tinymce/plugins/help/js/i18n/keynav/fi.js
  client/public/tinymce/plugins/help/js/i18n/keynav/fr-FR.js
  client/public/tinymce/plugins/help/js/i18n/keynav/fr_FR.js
  client/public/tinymce/plugins/help/js/i18n/keynav/he-IL.js
  client/public/tinymce/plugins/help/js/i18n/keynav/he_IL.js
  client/public/tinymce/plugins/help/js/i18n/keynav/hi.js
  client/public/tinymce/plugins/help/js/i18n/keynav/hr.js
  client/public/tinymce/plugins/help/js/i18n/keynav/hu-HU.js
  client/public/tinymce/plugins/help/js/i18n/keynav/hu_HU.js
  client/public/tinymce/plugins/help/js/i18n/keynav/id.js
  client/public/tinymce/plugins/help/js/i18n/keynav/it.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ja.js
  client/public/tinymce/plugins/help/js/i18n/keynav/kk.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ko-KR.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ko_KR.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ms.js
  client/public/tinymce/plugins/help/js/i18n/keynav/nb-NO.js
  client/public/tinymce/plugins/help/js/i18n/keynav/nb_NO.js
  client/public/tinymce/plugins/help/js/i18n/keynav/nl.js
  client/public/tinymce/plugins/help/js/i18n/keynav/pl.js
  client/public/tinymce/plugins/help/js/i18n/keynav/pt-BR.js
  client/public/tinymce/plugins/help/js/i18n/keynav/pt-PT.js
  client/public/tinymce/plugins/help/js/i18n/keynav/pt_BR.js
  client/public/tinymce/plugins/help/js/i18n/keynav/pt_PT.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ro.js
  client/public/tinymce/plugins/help/js/i18n/keynav/ru.js
  client/public/tinymce/plugins/help/js/i18n/keynav/sk.js
  client/public/tinymce/plugins/help/js/i18n/keynav/sl-SI.js
  client/public/tinymce/plugins/help/js/i18n/keynav/sl_SI.js
  client/public/tinymce/plugins/help/js/i18n/keynav/sv-SE.js
  client/public/tinymce/plugins/help/js/i18n/keynav/sv_SE.js
  client/public/tinymce/plugins/help/js/i18n/keynav/th-TH.js
  client/public/tinymce/plugins/help/js/i18n/keynav/th_TH.js
  client/public/tinymce/plugins/help/js/i18n/keynav/tr.js
  client/public/tinymce/plugins/help/js/i18n/keynav/uk.js
  client/public/tinymce/plugins/help/js/i18n/keynav/vi.js
  client/public/tinymce/plugins/help/js/i18n/keynav/zh-CN.js
  client/public/tinymce/plugins/help/js/i18n/keynav/zh-TW.js
  client/public/tinymce/plugins/help/js/i18n/keynav/zh_CN.js
  client/public/tinymce/plugins/help/js/i18n/keynav/zh_TW.js
  client/public/tinymce/plugins/help/plugin.js
  client/public/tinymce/plugins/help/plugin.min.js
  client/public/tinymce/plugins/image/index.js
  client/public/tinymce/plugins/image/plugin.js
  client/public/tinymce/plugins/image/plugin.min.js
  client/public/tinymce/plugins/importcss/index.js
  client/public/tinymce/plugins/importcss/plugin.js
  client/public/tinymce/plugins/importcss/plugin.min.js
  client/public/tinymce/plugins/insertdatetime/index.js
  client/public/tinymce/plugins/insertdatetime/plugin.js
  client/public/tinymce/plugins/insertdatetime/plugin.min.js
  client/public/tinymce/plugins/link/index.js
  client/public/tinymce/plugins/link/plugin.js
  client/public/tinymce/plugins/link/plugin.min.js
  client/public/tinymce/plugins/lists/index.js
  client/public/tinymce/plugins/lists/plugin.js
  client/public/tinymce/plugins/lists/plugin.min.js
  client/public/tinymce/plugins/media/index.js
  client/public/tinymce/plugins/media/plugin.js
  client/public/tinymce/plugins/media/plugin.min.js
  client/public/tinymce/plugins/nonbreaking/index.js
  client/public/tinymce/plugins/nonbreaking/plugin.js
  client/public/tinymce/plugins/nonbreaking/plugin.min.js
  client/public/tinymce/plugins/pagebreak/index.js
  client/public/tinymce/plugins/pagebreak/plugin.js
  client/public/tinymce/plugins/pagebreak/plugin.min.js
  client/public/tinymce/plugins/preview/index.js
  client/public/tinymce/plugins/preview/plugin.js
  client/public/tinymce/plugins/preview/plugin.min.js
  client/public/tinymce/plugins/quickbars/index.js
  client/public/tinymce/plugins/quickbars/plugin.js
  client/public/tinymce/plugins/quickbars/plugin.min.js
  client/public/tinymce/plugins/save/index.js
  client/public/tinymce/plugins/save/plugin.js
  client/public/tinymce/plugins/save/plugin.min.js
  client/public/tinymce/plugins/searchreplace/index.js
  client/public/tinymce/plugins/searchreplace/plugin.js
  client/public/tinymce/plugins/searchreplace/plugin.min.js
  client/public/tinymce/plugins/table/index.js
  client/public/tinymce/plugins/table/plugin.js
  client/public/tinymce/plugins/table/plugin.min.js
  client/public/tinymce/plugins/visualblocks/index.js
  client/public/tinymce/plugins/visualblocks/plugin.js
  client/public/tinymce/plugins/visualblocks/plugin.min.js
  client/public/tinymce/plugins/visualchars/index.js
  client/public/tinymce/plugins/visualchars/plugin.js
  client/public/tinymce/plugins/visualchars/plugin.min.js
  client/public/tinymce/plugins/wordcount/index.js
  client/public/tinymce/plugins/wordcount/plugin.js
  client/public/tinymce/plugins/wordcount/plugin.min.js
  client/public/tinymce/skins/content/dark/content.css
  client/public/tinymce/skins/content/dark/content.js
  client/public/tinymce/skins/content/dark/content.min.css
  client/public/tinymce/skins/content/dark/content.min.ts
  client/public/tinymce/skins/content/dark/content.ts
  client/public/tinymce/skins/content/default/content.css
  client/public/tinymce/skins/content/default/content.js
  client/public/tinymce/skins/content/default/content.min.css
  client/public/tinymce/skins/content/default/content.min.ts
  client/public/tinymce/skins/content/default/content.ts
  client/public/tinymce/skins/content/document/content.css
  client/public/tinymce/skins/content/document/content.js
  client/public/tinymce/skins/content/document/content.min.css
  client/public/tinymce/skins/content/document/content.min.ts
  client/public/tinymce/skins/content/document/content.ts
  client/public/tinymce/skins/content/tinymce-5-dark/content.css
  client/public/tinymce/skins/content/tinymce-5-dark/content.js
  client/public/tinymce/skins/content/tinymce-5-dark/content.min.css
  client/public/tinymce/skins/content/tinymce-5-dark/content.min.ts
  client/public/tinymce/skins/content/tinymce-5-dark/content.ts
  client/public/tinymce/skins/content/tinymce-5/content.css
  client/public/tinymce/skins/content/tinymce-5/content.js
  client/public/tinymce/skins/content/tinymce-5/content.min.css
  client/public/tinymce/skins/content/tinymce-5/content.min.ts
  client/public/tinymce/skins/content/tinymce-5/content.ts
  client/public/tinymce/skins/content/writer/content.css
  client/public/tinymce/skins/content/writer/content.js
  client/public/tinymce/skins/content/writer/content.min.css
  client/public/tinymce/skins/content/writer/content.min.ts
  client/public/tinymce/skins/content/writer/content.ts
  client/public/tinymce/skins/ui/oxide-dark/content.css
  client/public/tinymce/skins/ui/oxide-dark/content.inline.css
  client/public/tinymce/skins/ui/oxide-dark/content.inline.js
  client/public/tinymce/skins/ui/oxide-dark/content.inline.min.css
  client/public/tinymce/skins/ui/oxide-dark/content.inline.min.ts
  client/public/tinymce/skins/ui/oxide-dark/content.inline.ts
  client/public/tinymce/skins/ui/oxide-dark/content.js
  client/public/tinymce/skins/ui/oxide-dark/content.min.css
  client/public/tinymce/skins/ui/oxide-dark/content.min.ts
  client/public/tinymce/skins/ui/oxide-dark/content.ts
  client/public/tinymce/skins/ui/oxide-dark/skin.css
  client/public/tinymce/skins/ui/oxide-dark/skin.js
  client/public/tinymce/skins/ui/oxide-dark/skin.min.css
  client/public/tinymce/skins/ui/oxide-dark/skin.min.ts
  client/public/tinymce/skins/ui/oxide-dark/skin.shadowdom.css
  client/public/tinymce/skins/ui/oxide-dark/skin.shadowdom.js
  client/public/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.css
  client/public/tinymce/skins/ui/oxide-dark/skin.shadowdom.min.ts
  client/public/tinymce/skins/ui/oxide-dark/skin.shadowdom.ts
  client/public/tinymce/skins/ui/oxide-dark/skin.ts
  client/public/tinymce/skins/ui/oxide/content.css
  client/public/tinymce/skins/ui/oxide/content.inline.css
  client/public/tinymce/skins/ui/oxide/content.inline.js
  client/public/tinymce/skins/ui/oxide/content.inline.min.css
  client/public/tinymce/skins/ui/oxide/content.inline.min.ts
  client/public/tinymce/skins/ui/oxide/content.inline.ts
  client/public/tinymce/skins/ui/oxide/content.js
  client/public/tinymce/skins/ui/oxide/content.min.css
  client/public/tinymce/skins/ui/oxide/content.min.ts
  client/public/tinymce/skins/ui/oxide/content.ts
  client/public/tinymce/skins/ui/oxide/skin.css
  client/public/tinymce/skins/ui/oxide/skin.js
  client/public/tinymce/skins/ui/oxide/skin.min.css
  client/public/tinymce/skins/ui/oxide/skin.min.ts
  client/public/tinymce/skins/ui/oxide/skin.shadowdom.css
  client/public/tinymce/skins/ui/oxide/skin.shadowdom.js
  client/public/tinymce/skins/ui/oxide/skin.shadowdom.min.css
  client/public/tinymce/skins/ui/oxide/skin.shadowdom.min.ts
  client/public/tinymce/skins/ui/oxide/skin.shadowdom.ts
  client/public/tinymce/skins/ui/oxide/skin.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/content.css
  client/public/tinymce/skins/ui/tinymce-5-dark/content.inline.css
  client/public/tinymce/skins/ui/tinymce-5-dark/content.inline.js
  client/public/tinymce/skins/ui/tinymce-5-dark/content.inline.min.css
  client/public/tinymce/skins/ui/tinymce-5-dark/content.inline.min.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/content.inline.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/content.js
  client/public/tinymce/skins/ui/tinymce-5-dark/content.min.css
  client/public/tinymce/skins/ui/tinymce-5-dark/content.min.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/content.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.css
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.js
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.min.css
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.min.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.css
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.js
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.css
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.min.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.shadowdom.ts
  client/public/tinymce/skins/ui/tinymce-5-dark/skin.ts
  client/public/tinymce/skins/ui/tinymce-5/content.css
  client/public/tinymce/skins/ui/tinymce-5/content.inline.css
  client/public/tinymce/skins/ui/tinymce-5/content.inline.js
  client/public/tinymce/skins/ui/tinymce-5/content.inline.min.css
  client/public/tinymce/skins/ui/tinymce-5/content.inline.min.ts
  client/public/tinymce/skins/ui/tinymce-5/content.inline.ts
  client/public/tinymce/skins/ui/tinymce-5/content.js
  client/public/tinymce/skins/ui/tinymce-5/content.min.css
  client/public/tinymce/skins/ui/tinymce-5/content.min.ts
  client/public/tinymce/skins/ui/tinymce-5/content.ts
  client/public/tinymce/skins/ui/tinymce-5/skin.css
  client/public/tinymce/skins/ui/tinymce-5/skin.js
  client/public/tinymce/skins/ui/tinymce-5/skin.min.css
  client/public/tinymce/skins/ui/tinymce-5/skin.min.ts
  client/public/tinymce/skins/ui/tinymce-5/skin.shadowdom.css
  client/public/tinymce/skins/ui/tinymce-5/skin.shadowdom.js
  client/public/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.css
  client/public/tinymce/skins/ui/tinymce-5/skin.shadowdom.min.ts
  client/public/tinymce/skins/ui/tinymce-5/skin.shadowdom.ts
  client/public/tinymce/skins/ui/tinymce-5/skin.ts
  client/public/tinymce/themes/silver/index.js
  client/public/tinymce/themes/silver/theme.min.js
  client/public/tinymce/tinymce.d.ts
  client/public/tinymce/tinymce.min.js
  client/replit_integrations/audio/audio-playback-worklet.js
  client/replit_integrations/audio/audio-utils.ts
  client/replit_integrations/audio/index.ts
  client/replit_integrations/audio/useAudioPlayback.ts
  client/replit_integrations/audio/useVoiceRecorder.ts
  client/replit_integrations/audio/useVoiceStream.ts
  client/src/App.tsx
  client/src/components/ckeditor-wrapper.tsx
  client/src/components/pwa-install.tsx
  client/src/components/theme-provider.tsx
  client/src/components/theme-toggle.tsx
  client/src/components/tiptap-editor.tsx
  client/src/components/ui/accordion.tsx
  client/src/components/ui/alert-dialog.tsx
  client/src/components/ui/alert.tsx
  client/src/components/ui/aspect-ratio.tsx
  client/src/components/ui/avatar.tsx
  client/src/components/ui/badge.tsx
  client/src/components/ui/breadcrumb.tsx
  client/src/components/ui/button.tsx
  client/src/components/ui/calendar.tsx
  client/src/components/ui/card.tsx
  client/src/components/ui/carousel.tsx
  client/src/components/ui/chart.tsx
  client/src/components/ui/checkbox.tsx
  client/src/components/ui/collapsible.tsx
  client/src/components/ui/command.tsx
  client/src/components/ui/context-menu.tsx
  client/src/components/ui/dialog.tsx
  client/src/components/ui/drawer.tsx
  client/src/components/ui/dropdown-menu.tsx
  client/src/components/ui/form.tsx
  client/src/components/ui/hover-card.tsx
  client/src/components/ui/input-otp.tsx
  client/src/components/ui/input.tsx
  client/src/components/ui/label.tsx
  client/src/components/ui/menubar.tsx
  client/src/components/ui/navigation-menu.tsx
  client/src/components/ui/pagination.tsx
  client/src/components/ui/popover.tsx
  client/src/components/ui/progress.tsx
  client/src/components/ui/radio-group.tsx
  client/src/components/ui/resizable.tsx
  client/src/components/ui/scroll-area.tsx
  client/src/components/ui/select.tsx
  client/src/components/ui/separator.tsx
  client/src/components/ui/sheet.tsx
  client/src/components/ui/sidebar.tsx
  client/src/components/ui/skeleton.tsx
  client/src/components/ui/slider.tsx
  client/src/components/ui/switch.tsx
  client/src/components/ui/table.tsx
  client/src/components/ui/tabs.tsx
  client/src/components/ui/textarea.tsx
  client/src/components/ui/toast.tsx
  client/src/components/ui/toaster.tsx
  client/src/components/ui/toggle-group.tsx
  client/src/components/ui/toggle.tsx
  client/src/components/ui/tooltip.tsx
  client/src/hooks/use-mobile.tsx
  client/src/hooks/use-toast.ts
  client/src/index.css
  client/src/lib/queryClient.ts
  client/src/lib/utils.ts
  client/src/main.tsx
  client/src/pages/auditoria-financeira.tsx
  client/src/pages/comparador-juridico.tsx
  client/src/pages/consulta-corporativo.tsx
  client/src/pages/consulta-pdpj.tsx
  client/src/pages/consulta-processual.tsx
  client/src/pages/filtrador.tsx
  client/src/pages/legal-assistant.tsx
  client/src/pages/legal-assistant.tsx.recovered
  client/src/pages/login.tsx
  client/src/pages/not-found.tsx
  client/src/pages/painel-processos.tsx
  client/src/pages/playground.tsx
  client/src/pages/previdenciario.tsx
  client/src/pages/token-generator.tsx
  client/src/pages/tramitacao.tsx
  components.json
  drizzle.config.ts
  fix_buttons.txt
  main.py
  package.json
  postcss.config.js
  public/auditoria.html
  pyproject.toml
  replit.md
  script/build.ts
  server/index.ts
  server/replit_integrations/audio/client.ts
  server/replit_integrations/audio/index.ts
  server/replit_integrations/audio/routes.ts
  server/replit_integrations/batch/index.ts
  server/replit_integrations/batch/utils.ts
  server/replit_integrations/chat/index.ts
  server/replit_integrations/chat/routes.ts
  server/replit_integrations/chat/storage.ts
  server/replit_integrations/image/client.ts
  server/replit_integrations/image/index.ts
  server/replit_integrations/image/routes.ts
  server/routes.ts
  server/static.ts
  server/storage.ts
  server/vite.ts
  shared/models/chat.ts
  shared/schema.ts
  tailwind.config.ts
  tsconfig.json
  vite.config.ts
```

---

*Plano gerado pelo SK Code Editor — 23/06/2026, 04:01:35*
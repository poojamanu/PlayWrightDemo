# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: bootstrapMultipleModal.spec.js >> multiple modal
- Location: tests\bootstrapMultipleModal.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Tearing down "context" exceeded the test timeout of 40000ms.
```

# Page snapshot

```yaml
- generic [ref=f2e1]:
  - banner [ref=f2e2]:
    - link [ref=f2e8] [cursor=pointer]:
      - /url: index.php
      - img "logo" [ref=f2e9]
    - navigation [ref=f2e14]:
      - list [ref=f2e16]:
        - listitem [ref=f2e17]:
          - link "Home" [ref=f2e18] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=f2e19]:
          - link "Input Form" [ref=f2e20] [cursor=pointer]:
            - /url: simple-form-demo.php
        - listitem [ref=f2e21]:
          - link "Date Pickers" [ref=f2e22] [cursor=pointer]:
            - /url: date-picker.php
        - listitem [ref=f2e23]:
          - link "Table" [ref=f2e24] [cursor=pointer]:
            - /url: table-pagination.php
        - listitem [ref=f2e25]:
          - link "Progress Bars" [ref=f2e26] [cursor=pointer]:
            - /url: jquery-progress-bar.php
        - listitem [ref=f2e27]:
          - link "Alerts and Modals" [ref=f2e28] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=f2e29]:
          - link "List Box" [ref=f2e30] [cursor=pointer]:
            - /url: bootstrap-dual-list.php
        - listitem [ref=f2e31]:
          - link "Others" [ref=f2e32] [cursor=pointer]:
            - /url: drag-drop.php
  - generic [ref=f2e35]:
    - generic [ref=f2e38]:
      - generic [ref=f2e39]: Menu
      - list [ref=f2e40]:
        - listitem [ref=f2e41]:
          - link "Bootstrap Alert" [ref=f2e42] [cursor=pointer]:
            - /url: bootstrap-alert.php
        - listitem [ref=f2e43]:
          - link "Bootstrap Modal" [ref=f2e44] [cursor=pointer]:
            - /url: bootstrap-modal.php
        - listitem [ref=f2e45]:
          - link "Window Popup" [ref=f2e46] [cursor=pointer]:
            - /url: window-popup.php
        - listitem [ref=f2e47]:
          - link "Progress Bar Modal" [ref=f2e48] [cursor=pointer]:
            - /url: bootstrap-modal-progress.php
        - listitem [ref=f2e49]:
          - link "Javascript Alert" [ref=f2e50] [cursor=pointer]:
            - /url: javascript-alert.php
        - listitem [ref=f2e51]:
          - link "File Download" [ref=f2e52] [cursor=pointer]:
            - /url: file-download.php
    - generic [ref=f2e53]:
      - generic [ref=f2e55]:
        - generic [ref=f2e56]: Single Modal
        - button "Launch modal" [ref=f2e58] [cursor=pointer]
      - generic [ref=f2e60]:
        - generic [ref=f2e61]: Multiple modal
        - generic [ref=f2e62]:
          - button "Launch modal" [ref=f2e63] [cursor=pointer]
          - dialog [ref=f2e64]:
            - document:
              - generic [ref=f2e65]:
                - generic [ref=f2e66]:
                  - heading "First Modal Title" [level=5] [ref=f2e67]
                  - button "Close" [ref=f2e68] [cursor=pointer]: ×
                - generic [ref=f2e69]:
                  - paragraph [ref=f2e70]: Please add your first modal content here !
                  - paragraph [ref=f2e71]: Click 'Launch another modal' to open second modal!
                  - button "Launch another modal" [active] [ref=f2e72] [cursor=pointer]
                - generic [ref=f2e73]:
                  - button "Close" [ref=f2e74] [cursor=pointer]
                  - button "Save changes" [ref=f2e75] [cursor=pointer]
  - contentinfo [ref=f2e76]:
    - paragraph [ref=f2e79]: © 2021 Obsqura Testing, All Rights Reserved.
```
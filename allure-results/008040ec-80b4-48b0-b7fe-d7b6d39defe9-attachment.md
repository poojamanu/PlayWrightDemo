# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: DragAndDrop.spec.js >> drag and drop
- Location: tests\DragAndDrop.spec.js:3:5

# Error details

```
Test timeout of 40000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=f2e1]:
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
          - link "Drag and Drop" [ref=f2e42] [cursor=pointer]:
            - /url: drag-drop.php
        - listitem [ref=f2e43]:
          - link "Dynamic Data Loading" [ref=f2e44] [cursor=pointer]:
            - /url: dynamic-load.php
        - listitem [ref=f2e45]:
          - link "Chart Demo" [ref=f2e46] [cursor=pointer]:
            - /url: chart.php
    - generic [ref=f2e49]:
      - generic [ref=f2e50]: Drag & Drop
      - generic [ref=f2e51]:
        - heading "Draggable Items List" [level=4] [ref=f2e53]
        - generic [ref=f2e57]:
          - heading "Dropped Items List items" [level=4] [ref=f2e58]
          - generic [ref=f2e59]:
            - generic [ref=f2e60]: Draggable n°1
            - generic [ref=f2e61]: Draggable n°2
            - generic [ref=f2e62]: Draggable n°3
            - generic [ref=f2e63]: Draggable n°4
  - contentinfo [ref=f2e64]:
    - paragraph [ref=f2e67]: © 2021 Obsqura Testing, All Rights Reserved.
```
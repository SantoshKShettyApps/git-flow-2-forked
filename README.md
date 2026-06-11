# git-flow-2

<img width="1920" height="1080" alt="Credential Manager (Module)" src="https://github.com/user-attachments/assets/606ea0ef-aa43-45fa-bf66-51bb94e3a412" />


## But this is a Forked version.. P)
```mermaid
---
title: A Very High Level View (about different actors playing their role)
config:
  look: handDrawn
---
%%{init: {"flowchart": {"diagramPadding": 150}}}%%
graph LR
  subgraph B ["`**Browser**`"]
    CS["`**Content Script** - runs in the context of the Browser`"]
  end
  subgraph BE ["`**Browser Extension**`"]
    ES["`**Extension Scripts** - run in the context of the Extension`"]
    SW["`**Service Worker Scripts** - run in the context of the Extension`"]
  end
  subgraph MQ ["`**Event Queue**`"]
    direction LR
    M1
    M2
    M@{ shape: text, label: ". . . ." }
    Mn
  end

  U[/User/] --> |Interacts with| B
  U --> |Interacts with| BE
  ES -.-> |Injects| CS
  CS e1@<--> |Communicates with the Extension Scripts via| MQ
  ES e2@<--> |Communicates with the Content Script via| MQ
  e1@{ animate: true }
  e2@{ animate: true }
```

```mermaid
sequenceDiagram
    participant Alice@{ "type" : "control" }
    participant Bob
    Alice->>Bob: Control request
    Bob->>Alice: Control response
```
```mermaid
---
title: Simple sample
---
stateDiagram-v2
    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]
```
```mermaid
stateDiagram
   direction LR

   accTitle: This is the accessible title
   accDescr: This is an accessible description

   classDef notMoving fill:white
   classDef movement font-style:italic
   classDef badBadEvent fill:#f00,color:white,font-weight:bold,stroke-width:2px,stroke:yellow

   [*]--> Still
   Still --> [*]
   Still --> Moving
   Moving --> Still
   Moving --> Crash
   Crash --> [*]

   class Still notMoving
   class Moving, Crash movement
   class Crash badBadEvent
   class end badBadEvent
```

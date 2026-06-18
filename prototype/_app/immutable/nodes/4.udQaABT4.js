import{E as e,J as t,K as n,M as r,O as i,P as a,W as o,Y as s,d as c,it as l,j as u,l as d,p as f,q as p,rt as m,u as h,w as g}from"../chunks/BidH4RrD.js";import"../chunks/CFKVnMbq.js";import{t as _}from"../chunks/DMJrXHwC.js";var v=i(`<div class="flex min-h-screen w-screen flex-col gap-4 bg-storm-grey-50 p-6"><header class="flex flex-wrap items-center gap-3"><h1 class="text-large-label text-deep-purple-800">Loading screen sandbox</h1> <label class="flex items-center gap-2 text-small-label text-storm-grey-600"><input type="checkbox"/> Visible</label> <label class="flex items-center gap-2 text-small-label text-storm-grey-600">Label <input type="text" class="rounded-[var(--radius-lg)] border border-storm-grey-200 px-2 py-1 text-small-label"/></label> <label class="flex items-center gap-2 text-small-label text-storm-grey-600">Variant <select class="rounded-[var(--radius-lg)] border border-storm-grey-200 px-2 py-1 text-small-label"><option>skeleton (new)</option><option>box (original)</option></select></label> <label class="flex items-center gap-2 text-small-label text-storm-grey-600">Diagram <select class="rounded-[var(--radius-lg)] border border-storm-grey-200 px-2 py-1 text-small-label"><option>oauth (sequence)</option><option>org (flowchart)</option><option>login</option><option>process (LR)</option></select></label> <button type="button" class="rounded-[var(--radius-lg)] border border-storm-grey-200 bg-white px-3 py-1 text-small-label text-deep-purple-800 hover:bg-storm-grey-50">Replay stream</button></header> <section class="stage relative h-full min-h-0 w-full grow overflow-hidden rounded-xl border border-storm-grey-100 bg-white"><!></section></div>`);function y(i){let u=s(!0),y=s(`Creating syntax…`),b=s(`skeleton`),x={login:`flowchart TD
    start(["Open app"]) --> creds["Enter credentials"]
    creds --> valid{Valid?}
    valid -->|Yes| home["Dashboard"]
    valid -->|No| creds`,process:`flowchart LR
    intake["Intake"] --> review["Review"]
    review --> approve{Approve?}
    approve --> ship["Ship"]
    approve --> store[("Archive")]`,org:`flowchart TD
    A(["New user"]) --> B{Join org?}
    B --> C["Org permissions"]
    B --> D["No Org available"]
    C --> E{Auth}
    E --> F["User assigned"]
    E --> G["Not assigned"]
    G --> D
    D --> H["Create new org"]
    H --> I["User permission"]`,oauth:`sequenceDiagram
    participant User
    participant Browser
    participant GitHub as GitHub OAuth
    participant API as API Server
    participant Redis
    participant RL as Rate Limiter
    User->>Browser: Click Login
    Browser->>API: POST /auth/github
    API->>RL: Check rate limit
    RL-->>API: Allowed
    API-->>Browser: Redirect to GitHub
    Browser->>GitHub: GitHub login page
    User->>Browser: Enter credentials
    Browser->>GitHub: Auth code
    Browser->>API: POST /auth/github/callback
    GitHub-->>API: User profile data
    API->>Redis: Store session data
    Redis-->>API: Session stored
    API-->>Browser: JWT token + Refresh token
    Browser->>API: API request + JWT
    API-->>Browser: 200 OK + Response
    Browser-->>User: Display data`},S=s(`oauth`),C=s(p(x.oauth)),w;function T(){clearInterval(w);let e=x[a(S)];t(C,``);let n=0;w=setInterval(()=>{n+=6,t(C,e.slice(0,n),!0),n>=e.length&&(t(C,e,!0),clearInterval(w))},60)}function E(){t(u,!1),setTimeout(()=>t(u,!0),600)}var D=v(),O=o(D),k=n(o(O),2),A=o(k);c(A),m(),l(k);var j=n(k,2),M=n(o(j));c(M),l(j);var N=n(j,2),P=n(o(N)),F=o(P);F.value=F.__value=`skeleton`;var I=n(F);I.value=I.__value=`box`,l(P),l(N);var L=n(N,2),R=n(o(L)),z=o(R);z.value=z.__value=`oauth`;var B=n(z);B.value=B.__value=`org`;var V=n(B);V.value=V.__value=`login`;var H=n(V);H.value=H.__value=`process`,l(R),l(L);var U=n(L,2);l(O);var W=n(O,2),G=o(W),K=e=>{_(e,{get label(){return a(y)},get variant(){return a(b)},get code(){return a(C)},onStop:E})};g(G,e=>{a(u)&&e(K)}),l(W),l(D),d(A,()=>a(u),e=>t(u,e)),h(M,()=>a(y),e=>t(y,e)),f(P,()=>a(b),e=>t(b,e)),r(`change`,R,()=>t(C,x[a(S)],!0)),f(R,()=>a(S),e=>t(S,e)),r(`click`,U,T),e(i,D)}u([`change`,`click`]);export{y as component};
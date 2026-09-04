import{a as g,bU as w,G as E,r as n,j as e,B as b,C as N,h as S,i as R}from"./index-D8SWrkkL.js";import{B as T}from"./BreadCrumb-DEupYY98.js";import{A as I}from"./AlertDialogContainer-ByvGAX7s.js";import{T as k}from"./ToastContainer-DXqkJv4a.js";import{S as m}from"./Skeleton-BcakMCY4.js";/* empty css                 */import"./AlertDialog-6SItw02W.js";import"./bodyScrollLock-GiXtmoed.js";const O=["SAFETY_TALK_IRON_RULE_TOPIC","SAFETY_TALK_IRON_RULE_CONTENT"],C=a=>{if(!a.success||a.data==null)throw new Error(a.error?.message??"เกิดข้อผิดพลาดจากเซิร์ฟเวอร์");return a.data},A=a=>{const r=new Map(a.map(i=>[i.key,i]));return O.map(i=>{const l=r.get(i);return{key:i,label:l?.description??i,value:l?String(l.value):""}})},y={list:async()=>{const a=await g.get(E);return A(a.data??[])},update:async a=>{const r={items:a.items.map(l=>({key:l.key,value:l.value}))},i=await g.post(w,r,void 0,{showMessage:!0,successMessage:{title:"บันทึกสำเร็จ",sub:"กฎเหล็ก Safety Talk ถูกอัปเดตเรียบร้อย"}});C(i)}},L=()=>{const[a,r]=n.useState(!1),i=n.useCallback(async l=>{r(!0);try{await y.update(l)}catch(o){throw new Error(o?.message??"เกิดข้อผิดพลาด กรุณาลองใหม่")}finally{r(!1)}},[]);return{saving:a,saveIronRule:i}},F={SAFETY_TALK_IRON_RULE_TOPIC:"ri-price-tag-3-line",SAFETY_TALK_IRON_RULE_CONTENT:"ri-file-list-3-line"},f={SAFETY_TALK_IRON_RULE_TOPIC:"หัวข้อ",SAFETY_TALK_IRON_RULE_CONTENT:"เนื้อหา"},_={SAFETY_TALK_IRON_RULE_TOPIC:"กฎเหล็ก โชว์ทุกวัน",SAFETY_TALK_IRON_RULE_CONTENT:"กรุณาเว้นวรรคแต่ละรายการ"},Y=new Set(["SAFETY_TALK_IRON_RULE_CONTENT"]),j=`
  .ir-panel--responsive .tt-panel-body,
  .ir-panel--responsive .tt-panel-footer {
    padding-left: 24px;
    padding-right: 24px;
    box-sizing: border-box;
  }
  .ir-panel--responsive .ir-row {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    padding: 18px 0;
    border-bottom: 1px solid var(--ds-border, #eef0f2);
  }
  .ir-panel--responsive .ir-row:last-child {
    border-bottom: none;
  }
  .ir-panel--responsive .ir-label-col {
    flex: 0 0 33.33%;
    max-width: 33.33%;
    min-width: 0;
  }
  .ir-panel--responsive .ir-label-inner {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  /* icon เดิมเล็กไป — บังคับขนาดวงกลม + ตัว icon ให้ใหญ่ขึ้นชัดเจน */
  .ir-panel--responsive .tt-row-icon {
    width: 44px;
    height: 44px;
    flex: 0 0 44px;
    font-size: 22px;
  }
  .ir-panel--responsive .tt-row-icon i {
    font-size: 22px;
    line-height: 1;
  }
  .ir-panel--responsive .ir-label-text {
    min-width: 0;
    padding: 0 24px 0 0;
  }
  .ir-panel--responsive .ir-field-col {
    flex: 1 1 auto;
    min-width: 0;
  }
  .ir-panel--responsive .ir-field-col input,
  .ir-panel--responsive .ir-field-col textarea {
    width: 100%;
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    .ir-panel--responsive .tt-panel-body,
    .ir-panel--responsive .tt-panel-footer {
      padding-left: 16px;
      padding-right: 16px;
    }
    .ir-panel--responsive .tt-panel-footer button {
      width: 100%;
    }
    .ir-panel--responsive .ir-row {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 16px 0;
    }
    .ir-panel--responsive .ir-label-col {
      flex: 1 1 auto;
      max-width: 100%;
      width: 100%;
    }
    .ir-panel--responsive .ir-label-text {
      padding: 0;
    }
    /* ir-row ตอน desktop ตั้ง align-items:flex-start ไว้ พอกลาย
       เป็น flex-direction:column บนมือถือ ir-field-col เลยไม่
       stretch เต็มความกว้างตาม (ต่างจาก ir-label-col ที่เซ็ต
       width:100% ตรงๆ ไว้แล้ว) ต้อง override align-items ให้
       เป็น stretch พร้อมเซ็ต width ให้ ir-field-col ด้วย */
    .ir-panel--responsive .ir-field-col {
      width: 100%;
      max-width: 100%;
    }
  }
`,U=({items:a,loading:r,saving:i,onSubmit:l})=>{const[o,u]=n.useState({}),[d,h]=n.useState({});n.useEffect(()=>{if(!r){const s={};a.forEach(t=>{s[t.key]=t.value}),u(s),h({})}},[r]);const p=(s,t)=>{u(x=>({...x,[s]:t})),d[s]&&h(x=>({...x,[s]:void 0}))},v=()=>{const s={};return a.forEach(t=>{o[t.key]?.trim()||(s[t.key]="กรุณากรอกข้อมูล")}),h(s),Object.keys(s).length===0},c=async()=>{if(!v())return;const s={items:a.map(t=>({...t,value:o[t.key]??t.value}))};await l(s)};return r?e.jsxs("div",{className:"tt-panel ir-panel--responsive",children:[e.jsx("style",{children:j}),e.jsx("div",{className:"tt-panel-body",children:[0,1].map(s=>e.jsxs("div",{className:"ir-row",children:[e.jsx("div",{className:"ir-label-col",children:e.jsxs("div",{className:"ir-label-inner",children:[e.jsx(m,{height:38,width:38,circle:!0}),e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:6},children:[e.jsx(m,{height:14,width:"70%"}),e.jsx(m,{height:11,width:"50%"})]})]})}),e.jsx("div",{className:"ir-field-col",children:e.jsx(m,{height:s===1?90:38,width:"100%"})})]},s))}),e.jsx("div",{className:"tt-panel-footer",children:e.jsx(m,{height:42,width:110})})]}):e.jsxs("div",{className:"tt-panel ir-panel--responsive",children:[e.jsx("style",{children:j}),e.jsx("div",{className:"tt-panel-body",children:a.map(s=>{const t=Y.has(s.key);return e.jsxs("div",{className:"ir-row",children:[e.jsx("div",{className:"ir-label-col",children:e.jsxs("div",{className:"ir-label-inner",children:[e.jsx("div",{className:"tt-row-icon",children:e.jsx("i",{className:F[s.key]??"ri-shield-flash-line"})}),e.jsxs("div",{className:"ir-label-text",children:[e.jsxs("div",{className:"tt-row-label",children:[f[s.key]??s.label," ",e.jsx("span",{className:"sentinel-req",children:"*"})]}),_[s.key]&&e.jsx("div",{className:"tt-row-desc",children:_[s.key]})]})]})}),e.jsxs("div",{className:"ir-field-col",children:[t?e.jsx("textarea",{className:`sentinel-input${d[s.key]?" is-invalid":""}`,rows:5,placeholder:`ระบุ${f[s.key]??s.label}`,value:o[s.key]??"",onChange:x=>p(s.key,x.target.value)}):e.jsx("input",{type:"text",className:`sentinel-input${d[s.key]?" is-invalid":""}`,placeholder:`ระบุ${f[s.key]??s.label}`,value:o[s.key]??"",onChange:x=>p(s.key,x.target.value)}),d[s.key]&&e.jsxs("div",{className:"sentinel-field__error",children:[e.jsx("i",{className:"ri-error-warning-line"})," ",d[s.key]]})]})]},s.key)})}),e.jsx("div",{className:"tt-panel-footer",children:e.jsx(b,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",loading:i,disabled:i,onClick:()=>{c()},children:"บันทึก"})})]})},W=()=>{n.useEffect(()=>{document.title="กฎเหล็ก | Settings Safety Talk"},[]);const{saving:a,saveIronRule:r}=L(),[i,l]=n.useState([]),[o,u]=n.useState(!0),[d,h]=n.useState(null),p=n.useCallback(async()=>{u(!0),h(null);try{const c=await y.list();l(c)}catch(c){h(c instanceof Error?c.message:"เกิดข้อผิดพลาด")}finally{u(!1)}},[]);n.useEffect(()=>{p()},[p]);const v=n.useCallback(async c=>{try{await r(c),p()}catch{}},[r,p]);return d&&i.length===0?e.jsx("div",{className:"page-content",children:e.jsxs(N,{fluid:!0,children:[e.jsx(T,{title:"กฎเหล็ก",pageTitle:"Settings Safety Talk"}),e.jsx("div",{className:"outer-wrapper"})]})}):e.jsxs("div",{className:"page-content",children:[e.jsxs(N,{fluid:!0,children:[e.jsx(T,{title:"กฎเหล็ก",pageTitle:"Settings Safety Talk"}),e.jsx("div",{className:"outer-wrapper",children:e.jsx(S,{children:e.jsx(R,{children:e.jsx(U,{items:i,loading:o,saving:a,onSubmit:v})})})})]}),e.jsx(k,{}),e.jsx(I,{})]})};export{W as default};

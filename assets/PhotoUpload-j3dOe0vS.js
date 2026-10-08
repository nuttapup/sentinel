import{r as s,j as e,B as w}from"./index-CkElfgIW.js";const k=({src:t,alt:a,onClose:i})=>(s.useEffect(()=>{const n=o=>{o.key==="Escape"&&i()};return window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n)},[i]),e.jsxs("div",{role:"dialog","aria-modal":"true","aria-label":a,onClick:i,style:{position:"fixed",inset:0,zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(15, 23, 42, 0.82)",padding:24},children:[e.jsx("button",{type:"button","aria-label":"ปิด",onClick:i,style:{position:"absolute",top:16,right:16,width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",border:"none",background:"rgba(255,255,255,0.15)",color:"#fff",fontSize:20,cursor:"pointer"},children:e.jsx("i",{className:"ri-close-line","aria-hidden":"true"})}),e.jsx("img",{src:t,alt:a,onClick:n=>n.stopPropagation(),style:{maxWidth:"min(92vw, 1100px)",maxHeight:"88vh",objectFit:"contain",borderRadius:8,boxShadow:"0 12px 40px rgba(0,0,0,0.45)",cursor:"default"}})]})),z=({previewUrl:t,onFileChange:a,label:i="รูปภาพประกอบ",icon:n="ri-image-line",btnLabel:o="ถ่ายรูป",capture:m=!0,accept:f="image/*",disabled:r=!1,hideActions:g=!1,className:c})=>{const d=s.useRef(null),[b,p]=s.useState(!1),j=s.useCallback(u=>{const l=u.target.files?.[0];if(!l)return;const h=new FileReader;h.onload=v=>{const x=v.target?.result;typeof x=="string"&&a(l,x)},h.readAsDataURL(l),u.target.value=""},[a]),y=s.useCallback(()=>{r||d.current?.click()},[r]);return e.jsxs("div",{className:`pu-wrap${c?` ${c}`:""}`,children:[e.jsx("style",{children:`
        .pu-preview-zoomable { position: relative; }
        .pu-preview-hint {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          color: #fff;
          background: rgba(15, 23, 42, 0.35);
          opacity: 0;
          transition: opacity 0.15s ease;
          pointer-events: none;
        }
        .pu-preview-zoomable:hover .pu-preview-hint { opacity: 1; }
      `}),e.jsxs("div",{className:"pu-label",children:[e.jsx("i",{className:n,"aria-hidden":"true"}),e.jsx("span",{children:i})]}),t?e.jsxs("button",{type:"button",className:"pu-preview pu-preview-zoomable","aria-label":`ซูมดู ${i}`,onClick:()=>p(!0),style:{border:"none",padding:0,background:"none",display:"block",width:"100%"},children:[e.jsx("img",{src:t,alt:"preview",className:"pu-preview-img"}),e.jsx("span",{className:"pu-preview-hint","aria-hidden":"true",children:e.jsx("i",{className:"ri-zoom-in-line"})})]}):e.jsxs("div",{className:"pu-placeholder",children:[e.jsx("i",{className:"ri-image-line pu-placeholder-icon","aria-hidden":"true"}),e.jsx("span",{className:"pu-placeholder-text",children:"ยังไม่มีรูปภาพ"})]}),e.jsx("input",{ref:d,type:"file",accept:f,...m?{capture:"environment"}:{},style:{display:"none"},disabled:r,onChange:j,"aria-label":i}),!g&&e.jsx("div",{className:"pu-actions",children:e.jsx(w,{variant:"outline",size:"sm",leftIcon:t?"ri-refresh-line":"ri-camera-line",disabled:r,onClick:y,children:t?"เปลี่ยนรูป":o})}),b&&t&&e.jsx(k,{src:t,alt:i,onClose:()=>p(!1)})]})};export{z as P};

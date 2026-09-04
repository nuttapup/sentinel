import{r as c,j as i}from"./index-D8SWrkkL.js";const o=n=>({type:"ellipsis",key:n}),h=n=>typeof n=="object"&&n.type==="ellipsis",m=480,g=(n,a,r)=>{if(a<=1)return[];const s=Math.max(2,n-r),p=Math.min(a-1,n+r),t=[1];s>2&&t.push(o("ellipsis-start"));for(let l=s;l<=p;l++)t.push(l);return p<a-1&&t.push(o("ellipsis-end")),t.push(a),t},y=({pagination:n,onPageChange:a,delta:r=1})=>{const{page:s,total:p,totalPages:t,hasNext:l,hasPrev:d}=n,u=c.useMemo(()=>g(s,t,r),[s,t,r]),x=c.useCallback(()=>{d&&a(s-1)},[d,s,a]),f=c.useCallback(()=>{l&&a(s+1)},[l,s,a]),b=c.useCallback(e=>{e!==s&&a(e)},[s,a]);return t<=1?null:i.jsxs("div",{className:"ds-pager",children:[i.jsx("style",{children:`
        .ds-pager {
          margin-top: 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .ds-pager-info {
          flex-shrink: 0;
        }

        .ds-pager-btns {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        @media (max-width: ${m}px) {
          .ds-pager {
            flex-direction: column;
            align-items: center;
            gap: 10px;
          }
          .ds-pager-info {
            white-space: normal;
            text-align: center;
            font-size: 12px;
            line-height: 1.4;
          }
          .ds-pager-btns {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}),i.jsxs("span",{className:"ds-pager-info",children:["หน้า ",s," / ",t," · ทั้งหมด ",p," รายการ"]}),i.jsxs("div",{className:"ds-pager-btns",children:[i.jsx("button",{type:"button",className:"ds-page-btn default",onClick:x,disabled:!d,"aria-label":"หน้าก่อนหน้า",children:"‹"}),u.map(e=>h(e)?i.jsx("span",{className:"ds-pager-ellipsis","aria-hidden":"true",children:"…"},e.key):i.jsx("button",{type:"button",className:`ds-page-btn ${s===e?"active":"default"}`,onClick:()=>b(e),"aria-label":`หน้า ${e}`,"aria-current":s===e?"page":void 0,disabled:s===e,children:e},e)),i.jsx("button",{type:"button",className:"ds-page-btn default",onClick:f,disabled:!l,"aria-label":"หน้าถัดไป",children:"›"})]})]})};export{y as P};

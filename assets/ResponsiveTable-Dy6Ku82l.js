import{j as r}from"./index-CIdZPN3q.js";import{D as R}from"./Badge-BxtTQTOG.js";import{P as B}from"./Pagination-U_7TzCGH.js";const W=(e,o,s,t,i)=>`
  /* ── Desktop: horizontal scroll + sticky first col ── */
  .${e}-table-scroll {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
  }
  /* ย้าย border/radius มาอยู่ scroll container แล้ว —
     ลบของ sentinel-table-wrap ออกกัน border ซ้อน + overflow ชนกัน */


  ${s?`
  .${e}-table-scroll table td:first-child,
  .${e}-table-scroll table th:first-child {
    position: sticky;
    left: 0;
    background: var(--color-surface-white);
    z-index: 2;
  }
  .${e}-table-scroll table th:first-child {
    background: var(--ds-green-light, var(--color-surface-off));
  }`:""}

  /* ── Card list — ซ่อนบน desktop ── */
  .${e}-card-list { display: none; }

  /* ── Breakpoint: สลับ table ↔ card ── */
  @media (max-width: ${i}px) {
    .${e}-table-scroll { display: none; }
    .${e}-card-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      
    }
  }

  /* ── Card ── */
  .${e}-card {
    border: 1px solid var(--color-border-default);
    border-radius: var(--radius-md);
    background: var(--color-surface-white);
    padding: var(--space-3) var(--space-4);
  }
  .${e}-card__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-2);
  }
  .${e}-card__grid {
    display: grid;
    grid-template-columns: repeat(${t}, 1fr);
    gap: 8px 12px;
    margin-bottom: var(--space-3);
  }
  /* ── มือถือ: บังคับ 2 cols ── */
  @media (max-width: 600px) {
    .${e}-card__grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  .${e}-card__label {
    display: block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .3px;
    color: var(--color-text-subtle);
    text-transform: uppercase;
    margin-bottom: 2px;
  }
  .${e}-card__value {
    font-size: 13px;
    color: var(--color-text-body);
  }
  .${e}-card__actions {
    display: flex;
    gap: var(--space-2);
    border-top: 1px solid var(--color-border-default);
    padding-top: var(--space-2);
  }

  /* ── Utility class สำหรับ cardHeader ── */
  .${e}-card__code {
    font-weight: 700;
    font-size: 14px;
    color: var(--color-green-600);
  }
  .${e}-card__code--link {
    font-weight: 700;
    font-size: 14px;
    color: var(--color-green-600);
    cursor: pointer;
    text-decoration: underline;
    text-decoration-style: dotted;
    text-underline-offset: 3px;
  }
`;function M({columns:e,data:o,rowKey:s,loading:t=!1,skeletonRows:i=5,sort:m,onSort:u,showIndex:h,isFetching:d=!1,tableMinWidth:$="950px",stickyFirstCol:g=!0,breakpoint:_=1024,cardHeader:y,cardFields:j,cardActions:n,cardGridCols:k=3,emptyState:z,emptyText:p="ไม่พบข้อมูล",pagination:x,onPageChange:b,classPrefix:N="rt",className:w="",rowClassName:f}){const a=N,S=!t&&o.length===0,v={opacity:d?.45:1,transition:"opacity 0.2s ease",pointerEvents:d?"none":"auto"};return r.jsxs("div",{className:w,children:[r.jsx("style",{children:W(a,$,g,k,_)}),r.jsx("div",{className:`${a}-table-scroll`,style:{...v,overflowX:"auto"},children:r.jsx(R,{columns:e,data:o,rowKey:s,loading:t,skeletonRows:i,sort:m,onSort:u,showIndex:h,emptyText:p})}),r.jsx("div",{className:`${a}-card-list`,style:v,children:t?r.jsx("div",{style:{textAlign:"center",padding:"var(--space-6) 0",color:"var(--color-text-subtle)",fontSize:13},children:"กำลังโหลด..."}):S?z??r.jsxs("div",{style:{textAlign:"center",padding:"var(--space-6) 0",color:"var(--color-text-subtle)",fontSize:13},children:[r.jsx("i",{className:"ri-inbox-line",style:{fontSize:22,display:"block",marginBottom:8}}),p]}):o.map((l,D)=>r.jsxs("div",{className:`${a}-card${f?` ${f(l)}`:""}`,children:[r.jsx("div",{className:`${a}-card__header`,children:y(l)}),r.jsx("div",{className:`${a}-card__grid`,children:j.map((c,E)=>r.jsxs("div",{style:c.fullWidth?{gridColumn:"1 / -1"}:void 0,children:[r.jsx("span",{className:`${a}-card__label`,children:c.label}),r.jsx("span",{className:`${a}-card__value`,children:c.render(l)})]},`field-${E}`))}),n&&r.jsx("div",{className:`${a}-card__actions`,children:n(l)})]},l[s]!=null?String(l[s]):`row-${D}`))}),!t&&x&&b&&r.jsx(B,{pagination:x,onPageChange:b})]})}export{M as R};

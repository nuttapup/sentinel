import{cF as Ti,cG as zi,a6 as Oe,b_ as $e,cH as Fi,r as o,j as e,L as Ii,cI as _i,B as d,F as j,I as b,b8 as Bi,m as re,bw as xe,bv as y,a as Ke,cJ as qe,a8 as Xe,a9 as Pi,T as he,cK as Ye,cL as F,cM as Ze,cN as q,E as k,c7 as Qe,C as Ei,R as Di,d as Ri,e as Ai,f as Li}from"./index-ZG-tiNty.js";import{B as Wi}from"./BreadCrumb-BOxKjJzs.js";import{B as E,T as p}from"./Badge-Bgmbqxno.js";import{S as Be,a as X}from"./StatCard-BqDlcbfi.js";import{D as ue}from"./Table-DMZYgDuS.js";import{P as Oi}from"./Pagination-BzOuJMUZ.js";import{T as me}from"./Tabs-DvYrbWDD.js";import{S as R}from"./Switch-BSisxcTa.js";import{S}from"./StatusToggle-C-uRrf4u.js";import{P as Mi}from"./PhotoUpload-DQBKt-GT.js";import{U as Je}from"./UIDatePicker-DJHO_lKA.js";import{P as Pe}from"./ProvinceMultiSelect-tsK3KDI8.js";import{E as Ui}from"./EmployeePicker-DbE1PPZT.js";import{M as T,b as se,a as z}from"./Modal-Cl3aNquZ.js";import{A as oe}from"./AlertDialog-BWVWj2na.js";import{D as ei,f as Gi,a as Hi,P as hi,F as ui,b as Vi,n as $i}from"./DetailPopover-D7QyByHy.js";import{S as Ki}from"./Spinner-CdtboSKD.js";import{S as Y}from"./Skeleton-Bu3qtKej.js";/* empty css                  */import"./bodyScrollLock-GiXtmoed.js";var qi=["className","cssModule","tag"];function We(){return We=Object.assign?Object.assign.bind():function(i){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(i[n]=l[n])}return i},We.apply(this,arguments)}function Xi(i,s){if(i==null)return{};var l=Yi(i,s),n,r;if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);for(r=0;r<t.length;r++)n=t[r],!(s.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(i,n)&&(l[n]=i[n])}return l}function Yi(i,s){if(i==null)return{};var l={},n=Object.keys(i),r,t;for(t=0;t<n.length;t++)r=n[t],!(s.indexOf(r)>=0)&&(l[r]=i[r]);return l}var Zi={className:$e.string,cssModule:$e.object,tag:Fi};function mi(i){var s=i.className,l=i.cssModule,n=i.tag,r=n===void 0?"div":n,t=Xi(i,qi),a=Ti(zi(s,"card-header"),l);return Oe.createElement(r,We({},t,{className:a}))}mi.propTypes=Zi;const Qi=({title:i,code:s,language:l="tsx"})=>{const[n,r]=o.useState(!1),[t,a]=o.useState(!1),c=()=>{s&&navigator.clipboard.writeText(s.trim()).then(()=>{a(!0),setTimeout(()=>a(!1),2e3)})};return e.jsxs(Oe.Fragment,{children:[e.jsxs(mi,{className:"align-items-center d-flex",children:[e.jsx("h4",{className:"card-title mb-0 flex-grow-1",children:i}),s&&e.jsx("div",{className:"flex-shrink-0",children:e.jsxs("div",{className:"form-check form-switch form-switch-right form-switch-md",children:[e.jsx(Ii,{className:"form-label text-muted",children:"Show Code"}),e.jsx(_i,{className:"form-check-input code-switcher",type:"checkbox",checked:n,onChange:v=>r(v.target.checked)})]})})]}),s&&n&&e.jsxs("div",{style:{background:"#1e2937",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 16px",borderBottom:"1px solid rgba(255,255,255,0.08)"},children:[e.jsx("span",{style:{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.35)",letterSpacing:"0.1em",textTransform:"uppercase",fontFamily:"inherit"},children:l}),e.jsxs("button",{type:"button",onClick:c,style:{display:"inline-flex",alignItems:"center",gap:4,padding:"2px 10px",background:t?"rgba(107,148,115,0.3)":"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",borderRadius:4,fontSize:11,fontWeight:700,color:t?"#4ade80":"rgba(255,255,255,0.6)",cursor:"pointer"},children:[e.jsx("i",{className:t?"ri-check-line":"ri-clipboard-line"}),t?"คัดลอกแล้ว!":"Copy"]})]}),e.jsx("pre",{style:{margin:0,padding:"16px 20px",overflowX:"auto",fontFamily:'"Roboto Mono", "Courier New", monospace',fontSize:12,lineHeight:1.7,color:"#e2e8f0",whiteSpace:"pre",background:"transparent"},children:e.jsx("code",{style:{fontFamily:"inherit",background:"none",color:"inherit",padding:0,fontSize:"inherit"},children:s.trim()})})]})]})},Ji=`import Button from '@/components/common/Button';

{/* ─── Sizes ─────────────────────────────────────── */}
<Button variant="primary" size="sm"  leftIcon="ri-add-line">เพิ่ม sm</Button>
<Button variant="primary"            leftIcon="ri-add-line">เพิ่ม md</Button>
<Button variant="primary" size="lg"  leftIcon="ri-add-line">เพิ่ม lg</Button>
<Button variant="primary" size="xl"  leftIcon="ri-login-box-line">เข้าสู่ระบบ xl</Button>

{/* ─── Variants ───────────────────────────────────── */}
<Button variant="primary"      leftIcon="ri-save-3-line">บันทึก</Button>
<Button variant="outline"      leftIcon="ri-search-line">ค้นหา</Button>
<Button variant="ghost"        leftIcon="ri-refresh-line">รีเฟรช</Button>
<Button variant="info"         leftIcon="ri-eye-line">ดูรายละเอียด</Button>
<Button variant="info-outline" leftIcon="ri-eye-line">ดูรายละเอียด</Button>
<Button variant="edit"         leftIcon="ri-pencil-line">แก้ไข</Button>
<Button variant="edit-outline" leftIcon="ri-pencil-line">แก้ไข</Button>
<Button variant="danger"       leftIcon="ri-delete-bin-line">ลบ</Button>
<Button variant="soft-danger"  leftIcon="ri-close-line">ยกเลิก</Button>

{/* ─── Icon Only ──────────────────────────────────── */}
<Button variant="primary"      size="icon" leftIcon="ri-save-3-line"      aria-label="บันทึก" />
<Button variant="outline"      size="icon" leftIcon="ri-search-line"      aria-label="ค้นหา" />
<Button variant="ghost"        size="icon" leftIcon="ri-refresh-line"     aria-label="รีเฟรช" />
<Button variant="info"         size="icon" leftIcon="ri-eye-line"         aria-label="ดูรายละเอียด" />
<Button variant="info-outline" size="icon" leftIcon="ri-eye-line"         aria-label="ดูรายละเอียด" />
<Button variant="edit"         size="icon" leftIcon="ri-pencil-line"      aria-label="แก้ไข" />
<Button variant="edit-outline" size="icon" leftIcon="ri-pencil-line"      aria-label="แก้ไข" />
<Button variant="danger"       size="icon" leftIcon="ri-delete-bin-line"  aria-label="ลบ" />
<Button variant="soft-danger"  size="icon" leftIcon="ri-close-line"       aria-label="ยกเลิก" />

{/* ─── States ─────────────────────────────────────── */}
<Button variant="primary"     disabled leftIcon="ri-save-3-line">ปิดใช้งาน</Button>
<Button variant="outline"     disabled leftIcon="ri-search-line">ปิดใช้งาน</Button>
<Button variant="danger"      disabled leftIcon="ri-delete-bin-line">ปิดใช้งาน</Button>
<Button variant="primary"     loading>กำลังบันทึก...</Button>
<Button variant="soft-danger" loading>กำลังดำเนินการ...</Button>`,ge={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},fe={display:"flex",flexWrap:"wrap",gap:"var(--space-2)",alignItems:"center"},ii=[{variant:"primary",label:"บันทึก",icon:"ri-save-3-line"},{variant:"outline",label:"ค้นหา",icon:"ri-search-line"},{variant:"ghost",label:"รีเฟรช",icon:"ri-refresh-line"},{variant:"info",label:"ดูรายละเอียด",icon:"ri-eye-line"},{variant:"info-outline",label:"ดูรายละเอียด",icon:"ri-eye-line"},{variant:"edit",label:"แก้ไข",icon:"ri-pencil-line"},{variant:"edit-outline",label:"แก้ไข",icon:"ri-pencil-line"},{variant:"danger",label:"ลบ",icon:"ri-delete-bin-line"},{variant:"soft-danger",label:"ยกเลิก",icon:"ri-close-line"}],el=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:ge,children:"Sizes — sm / md / lg / xl"}),e.jsxs("div",{style:fe,children:[e.jsx(d,{variant:"primary",size:"sm",leftIcon:"ri-add-line",children:"เพิ่ม sm"}),e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",children:"เพิ่ม md"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-add-line",children:"เพิ่ม lg"}),e.jsx(d,{variant:"primary",size:"xl",leftIcon:"ri-login-box-line",children:"เข้าสู่ระบบ xl"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ge,children:"Variants — ทุกสี"}),e.jsx("div",{style:fe,children:ii.map(({variant:i,label:s,icon:l})=>e.jsx(d,{variant:i,leftIcon:l,children:s},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ge,children:"Icon Only — ทุกสี"}),e.jsx("div",{style:fe,children:ii.map(({variant:i,icon:s,label:l})=>e.jsx(d,{variant:i,size:"icon",leftIcon:s,"aria-label":l},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ge,children:"States — disabled / loading"}),e.jsxs("div",{style:fe,children:[e.jsx(d,{variant:"primary",disabled:!0,leftIcon:"ri-save-3-line",children:"ปิดใช้งาน"}),e.jsx(d,{variant:"outline",disabled:!0,leftIcon:"ri-search-line",children:"ปิดใช้งาน"}),e.jsx(d,{variant:"danger",disabled:!0,leftIcon:"ri-delete-bin-line",children:"ปิดใช้งาน"}),e.jsx(d,{variant:"primary",loading:!0,children:"กำลังบันทึก..."}),e.jsx(d,{variant:"soft-danger",loading:!0,children:"กำลังดำเนินการ..."})]})]})]}),il=`import Badge, { Tag } from '@/components/common/Badge';

{/* ── Badge — สถานะ (pill + dot) ──────────────────────────────── */}
{/* variant: success | warning | error | info | neutral            */}
{/* outline: พื้นขาว + ขอบสี   size: 'sm' (11px สำหรับตาราง)      */}

{/* Filled + dot */}
<Badge variant="success">เข้าร่วม</Badge>
<Badge variant="warning">ฉบับร่าง</Badge>
<Badge variant="error">ปิด</Badge>
<Badge variant="info">PPE</Badge>
<Badge variant="neutral">ไม่มีข้อมูล</Badge>

{/* --sm density สำหรับตาราง (แถวไม่เบี้ยว) */}
<Badge variant="success" size="sm">เข้าร่วม</Badge>
<Badge variant="neutral" size="sm">ไม่มีข้อมูล</Badge>

{/* Outline */}
<Badge variant="warning" outline showDot={false}>TPE</Badge>
<Badge variant="info"    outline showDot={false}>PPE</Badge>
<Badge variant="success" outline showDot={false}>ผ่าน</Badge>
<Badge variant="error"   outline showDot={false}>หมดอายุ</Badge>

{/* ── Tag — ป้ายหมวด (radius-sm ไม่ใช่ pill · วางหลายอันได้) ───── */}
{/* Tag ไม่มี dot by default                                        */}

{/* Tag + icon */}
<Tag variant="info"    icon="ri-car-line">ยานยนต์</Tag>
<Tag variant="warning" icon="ri-user-line">บุคคล</Tag>
<Tag variant="success" icon="ri-checkbox-circle-line">ผ่านแล้ว</Tag>

{/* Tag ไม่มี icon */}
<Tag variant="neutral">ทั่วไป</Tag>
<Tag variant="error">เร่งด่วน</Tag>
<Tag variant="success">ผ่าน</Tag>
<Tag variant="info">ยานยนต์</Tag>

{/* Tag --sm วางหลายอัน */}
<Tag variant="neutral" size="sm">ทั่วไป</Tag>
<Tag variant="info"    size="sm">PPE</Tag>
<Tag variant="success" size="sm">ผ่าน</Tag>

{/* Tag — premium / featured / special (สีจัดกลุ่ม ไม่มีนัยเชิงประเมินผล — Tag เท่านั้น) */}
<Tag variant="premium">พรีเมียม</Tag>
<Tag variant="featured">แนะนำ</Tag>
<Tag variant="special">พิเศษ</Tag>

{/* Tag — group-1..6 (จัดกลุ่ม/หมวดหมู่ เช่น กองงาน 1-6 — mapping ตายตัว ห้ามเลือกสีเอง) */}
<Tag variant="group-1">กองงาน 1</Tag>
<Tag variant="group-2">กองงาน 2</Tag>
<Tag variant="group-3">กองงาน 3</Tag>
<Tag variant="group-4">กองงาน 4</Tag>
<Tag variant="group-5">กองงาน 5</Tag>
<Tag variant="group-6">กองงาน 6</Tag>`,I={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},_={display:"flex",gap:"var(--space-3)",flexWrap:"wrap",alignItems:"center"},li=[{variant:"success",label:"เข้าร่วม"},{variant:"warning",label:"ฉบับร่าง"},{variant:"error",label:"ปิด"},{variant:"info",label:"PPE"},{variant:"neutral",label:"ไม่มีข้อมูล"}],ll=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Badge — Status (Filled + Dot)"}),e.jsx("div",{style:_,children:li.map(({variant:i,label:s})=>e.jsx(E,{variant:i,children:s},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Badge — --sm density (สำหรับตาราง)"}),e.jsx("div",{style:_,children:li.map(({variant:i,label:s})=>e.jsx(E,{variant:i,size:"sm",children:s},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Badge — Outline (พื้นขาว + ขอบสี)"}),e.jsxs("div",{style:_,children:[e.jsx(E,{variant:"warning",outline:!0,showDot:!1,children:"TPE"}),e.jsx(E,{variant:"info",outline:!0,showDot:!1,children:"PPE"}),e.jsx(E,{variant:"success",outline:!0,showDot:!1,children:"ผ่าน"}),e.jsx(E,{variant:"error",outline:!0,showDot:!1,children:"หมดอายุ"}),e.jsx(E,{variant:"neutral",outline:!0,showDot:!1,children:"ทั่วไป"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Tag — ป้ายหมวด + Icon (sentinel-tag)"}),e.jsxs("div",{style:_,children:[e.jsx(p,{variant:"info",icon:"ri-car-line",children:"ยานยนต์"}),e.jsx(p,{variant:"warning",icon:"ri-user-line",children:"บุคคล"}),e.jsx(p,{variant:"success",icon:"ri-checkbox-circle-line",children:"ผ่านแล้ว"}),e.jsx(p,{variant:"error",icon:"ri-fire-line",children:"เพลิงไหม้"}),e.jsx(p,{variant:"neutral",icon:"ri-time-line",children:"รอดำเนินการ"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Tag — ป้ายหมวด ไม่มี Icon"}),e.jsxs("div",{style:_,children:[e.jsx(p,{variant:"neutral",children:"ทั่วไป"}),e.jsx(p,{variant:"error",children:"เร่งด่วน"}),e.jsx(p,{variant:"success",children:"ผ่าน"}),e.jsx(p,{variant:"info",children:"ยานยนต์"}),e.jsx(p,{variant:"warning",children:"TPE"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Tag — --sm วางหลายอันต่อกัน"}),e.jsxs("div",{style:_,children:[e.jsx(p,{variant:"neutral",size:"sm",children:"ทั่วไป"}),e.jsx(p,{variant:"info",size:"sm",children:"PPE"}),e.jsx(p,{variant:"success",size:"sm",children:"ผ่าน"}),e.jsx(p,{variant:"warning",size:"sm",children:"TPE"}),e.jsx(p,{variant:"error",size:"sm",children:"เร่งด่วน"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Tag — Premium / Featured / Special (สีจัดกลุ่มเพิ่มเติม)"}),e.jsxs("div",{style:_,children:[e.jsx(p,{variant:"premium",children:"พรีเมียม"}),e.jsx(p,{variant:"featured",children:"แนะนำ"}),e.jsx(p,{variant:"special",children:"พิเศษ"}),e.jsx(p,{variant:"premium",icon:"ri-vip-crown-fill",children:"สมาชิกพรีเมียม"}),e.jsx(p,{variant:"featured",icon:"ri-star-smile-fill",children:"รายการแนะนำ"}),e.jsx(p,{variant:"special",icon:"ri-star-fill",children:"รายการพิเศษ"}),e.jsx(p,{variant:"premium",size:"sm",children:"พรีเมียม"}),e.jsx(p,{variant:"featured",size:"sm",children:"แนะนำ"}),e.jsx(p,{variant:"special",size:"sm",children:"พิเศษ"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Tag — Group 1-6 (จัดกลุ่ม/หมวดหมู่ เช่น กองงาน)"}),e.jsxs("div",{style:_,children:[e.jsx(p,{variant:"group-1",children:"กองงาน 1"}),e.jsx(p,{variant:"group-2",children:"กองงาน 2"}),e.jsx(p,{variant:"group-3",children:"กองงาน 3"}),e.jsx(p,{variant:"group-4",children:"กองงาน 4"}),e.jsx(p,{variant:"group-5",children:"กองงาน 5"}),e.jsx(p,{variant:"group-6",children:"กองงาน 6"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:I,children:"Tag — Group 1-6 --sm (ใช้ในตาราง)"}),e.jsxs("div",{style:_,children:[e.jsx(p,{variant:"group-1",size:"sm",children:"กองงาน 1"}),e.jsx(p,{variant:"group-2",size:"sm",children:"กองงาน 2"}),e.jsx(p,{variant:"group-3",size:"sm",children:"กองงาน 3"}),e.jsx(p,{variant:"group-4",size:"sm",children:"กองงาน 4"}),e.jsx(p,{variant:"group-5",size:"sm",children:"กองงาน 5"}),e.jsx(p,{variant:"group-6",size:"sm",children:"กองงาน 6"})]})]})]}),sl=`import StatCard, { StatCardGroup } from '@/components/common/StatCard';

{/* standalone — auto-fill responsive */}
<StatCardGroup columns={4} mb="18px">
<StatCard
  label="All Users"
  value={24}
  sub="ผู้ใช้ทั้งหมด"
  icon="ri-team-line"
  color="green"
/>
</StatCardGroup>

{/* grid — ห่อด้วย StatCardGroup + columns */}
<StatCardGroup columns={5} mb="18px">
  {items.map((item) => ( 
    <StatCard
      key={item.label}
      label={item.label}
      value={item.value}
      sub={item.sub}
      icon={item.icon}
      color={item.color}
    />
  ))}
</StatCardGroup>


{/* ค่าตายตัว */}
<StatCardGroup columns={4} mb="18px">

{/* ใช้ design token */}
<StatCardGroup columns={4} mb="var(--space-6)">

{/* ไม่ระบุ → ไม่มี margin-bottom เหมือนเดิม */}
<StatCardGroup columns={4}>

{/* color variants */}
{/* green  amber  blue  emerald  red  slate */}`,tl=[{label:"Admin",value:4,sub:"ผู้ดูแลระบบ",icon:"ri-shield-star-line",color:"blue"},{label:"Safety",value:12,sub:"เจ้าหน้าที่ความปลอดภัย",icon:"ri-shield-check-line",color:"green"},{label:"Audit",value:6,sub:"ผู้ตรวจสอบ",icon:"ri-search-eye-line",color:"amber"},{label:"HQ",value:3,sub:"สำนักงานใหญ่",icon:"ri-building-2-line",color:"slate"},{label:"Lead",value:8,sub:"หัวหน้าทีม",icon:"ri-user-star-line",color:"emerald"}],al=[{label:"ทั้งหมด",value:120,sub:"ถังดับเพลิงทั้งหมด",icon:"ri-fire-line",color:"slate"},{label:"ใช้งานปกติ",value:96,sub:"พร้อมใช้งาน",icon:"ri-checkbox-circle-line",color:"green"},{label:"ใกล้หมดอายุ",value:14,sub:"ต้องตรวจสอบเร็วๆ นี้",icon:"ri-alarm-warning-line",color:"amber"},{label:"หมดอายุ",value:7,sub:"ต้องเปลี่ยนทันที",icon:"ri-close-circle-line",color:"red"},{label:"ตรวจสอบแล้ว",value:88,sub:"เดือนนี้",icon:"ri-shield-check-line",color:"emerald"}],Ee={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},nl=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Ee,children:"ผู้ใช้งานตามบทบาท"}),e.jsx(Be,{columns:5,children:tl.map(i=>e.jsx(X,{label:i.label,value:i.value,sub:i.sub,icon:i.icon,color:i.color},i.label))})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ee,children:"สถานะถังดับเพลิง"}),e.jsx(Be,{columns:5,children:al.map(i=>e.jsx(X,{label:i.label,value:i.value,sub:i.sub,icon:i.icon,color:i.color},i.label))})]}),e.jsxs("div",{children:[e.jsx("div",{style:Ee,children:"test"}),e.jsxs(Be,{columns:4,children:[e.jsx(X,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"}),e.jsx(X,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"}),e.jsx(X,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"}),e.jsx(X,{label:"All Users",value:24,sub:"ผู้ใช้ทั้งหมด",icon:"ri-team-line",color:"green"})]})]})]}),rl=`import { useState, useMemo } from 'react';
import DataTable, { type Column } from '@/components/common/Table';
import Badge, { Tag }  from '@/components/common/Badge';
import Button          from '@/components/common/Button';
import Pagination, { type PaginationMeta } from '@/components/common/Pagination';

const PAGE_SIZE = 3;
const [page,  setPage]  = useState(1);
const [page2, setPage2] = useState(1);

// ── columns ────────────────────────────────────────────────────
const columns: Column<Row>[] = [
  {
    key: 'index', header: '#', numeric: true,
    render: (_, idx) => (page - 1) * PAGE_SIZE + idx + 1,
  },
  { key: 'province', header: 'จังหวัด' },
  { key: 'name',     header: 'ชื่อสถานที่', sortable: true },
  {
    key: 'code', header: 'รหัส',
    render: (row) => (
      <Tag variant="success" size="sm" showDot={false}>{row.code}</Tag>
    ),
  },
  { key: 'capacity', header: 'Capacity', numeric: true, sortable: true },
  {
    key: 'status', header: 'สถานะ',
    render: (row) => <Badge variant={row.status}>{row.statusLabel}</Badge>,
  },
  {
    key: 'action', header: 'จัดการ',
    render: () => (
      <div style={{ display: 'flex', gap: 'var(--space-1)' }}>
        <Button variant="edit-outline" size="sm" leftIcon="ri-pencil-line"     aria-label="แก้ไข" />
        <Button variant="danger"       size="sm" leftIcon="ri-delete-bin-line" aria-label="ลบ"    />
      </div>
    ),
  },
];

// ── pagination meta (สำหรับ Pagination component) ──────────────
const pagination: PaginationMeta = useMemo(() => ({
  page:       page2,
  total:      data.length,
  totalPages: Math.ceil(data.length / PAGE_SIZE),
  hasNext:    page2 < Math.ceil(data.length / PAGE_SIZE),
  hasPrev:    page2 > 1,
}), [page2, data.length]);

const sliced = data.slice((page2 - 1) * PAGE_SIZE, page2 * PAGE_SIZE);

{/* 1. Built-in Pager — prev/current/next ในตัว */}
<DataTable
  columns={columns}
  data={data}
  rowKey="id"
  total={data.length}
  page={page}
  pageSize={PAGE_SIZE}
  onPageChange={setPage}
/>

{/* 2. Pagination component — ellipsis style */}
<DataTable columns={columns} data={sliced} rowKey="id" />
<Pagination pagination={pagination} onPageChange={setPage2} />

{/* 3. Loading skeleton */}
<DataTable
  columns={columns}
  data={[]}
  rowKey="id"
  loading
  skeletonRows={3}
/>

{/* 4. Empty state */}
<DataTable
  columns={columns}
  data={[]}
  rowKey="id"
  emptyText="ไม่พบข้อมูล"
/>`,ol=[{id:"1",province:"ขอนแก่น",name:"คลังสินค้า A",code:"WH-001",capacity:500,status:"success",statusLabel:"ใช้งาน"},{id:"2",province:"นครราชสีมา",name:"คลังสินค้า B",code:"WH-002",capacity:320,status:"success",statusLabel:"ใช้งาน"},{id:"3",province:"อุดรธานี",name:"คลังสินค้า C",code:"WH-003",capacity:150,status:"warning",statusLabel:"ใกล้เต็ม"},{id:"4",province:"ขอนแก่น",name:"คลังสินค้า D",code:"WH-004",capacity:80,status:"error",statusLabel:"ปิดปรับปรุง"},{id:"5",province:"บุรีรัมย์",name:"คลังสินค้า E",code:"WH-005",capacity:600,status:"success",statusLabel:"ใช้งาน"},{id:"6",province:"สุรินทร์",name:"คลังสินค้า F",code:"WH-006",capacity:210,status:"warning",statusLabel:"ใกล้เต็ม"},{id:"7",province:"ชัยภูมิ",name:"คลังสินค้า G",code:"WH-007",capacity:90,status:"success",statusLabel:"ใช้งาน"},{id:"8",province:"มหาสารคาม",name:"คลังสินค้า H",code:"WH-008",capacity:45,status:"error",statusLabel:"ปิดปรับปรุง"}],le=3,je={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)",marginTop:"var(--space-2)",display:"flex",alignItems:"center",gap:"var(--space-2)"},be=i=>[{key:"index",header:"#",numeric:!0,render:(s,l)=>(i-1)*le+l+1},{key:"province",header:"จังหวัด"},{key:"name",header:"ชื่อสถานที่",sortable:!0},{key:"code",header:"รหัส",align:"center",render:s=>e.jsx(p,{variant:"success",size:"sm",showDot:!1,children:s.code})},{key:"capacity",header:"Capacity",numeric:!0,sortable:!0},{key:"status",header:"สถานะ",align:"center",render:s=>e.jsx(E,{variant:s.status,children:s.statusLabel})},{key:"action",header:"จัดการ",align:"center",render:()=>e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"var(--space-1)"},children:[e.jsx(d,{variant:"edit-outline",size:"sm",leftIcon:"ri-pencil-line","aria-label":"แก้ไข"}),e.jsx(d,{variant:"danger",size:"sm",leftIcon:"ri-delete-bin-line","aria-label":"ลบ"})]})}],dl=({data:i=ol})=>{const[s,l]=o.useState(1),[n,r]=o.useState(1),t=o.useMemo(()=>({page:n,total:i.length,totalPages:Math.ceil(i.length/le),hasNext:n<Math.ceil(i.length/le),hasPrev:n>1}),[n,i.length]),a=i.slice((n-1)*le,n*le);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:je,children:"With Built-in Pager"}),e.jsx(ue,{columns:be(s),data:i,rowKey:"id",total:i.length,page:s,pageSize:le,onPageChange:l})]}),e.jsxs("div",{children:[e.jsx("div",{style:je,children:"With Pagination Component"}),e.jsx(ue,{columns:be(n),data:a,rowKey:"id"}),e.jsx(Oi,{pagination:t,onPageChange:r})]}),e.jsxs("div",{children:[e.jsx("div",{style:je,children:"Loading Skeleton"}),e.jsx(ue,{columns:be(1),data:[],rowKey:"id",loading:!0,skeletonRows:3})]}),e.jsxs("div",{children:[e.jsx("div",{style:je,children:"Empty State"}),e.jsx(ue,{columns:be(1),data:[],rowKey:"id",emptyText:"ไม่พบข้อมูล"})]})]})},cl=`import Tabs, { type TabItem } from '@/components/common/Tabs';

{/* variant: 'underline' | 'segmented' | 'pill' */}

{/* Underline Tabs */}
<Tabs
  variant="underline"
  value={tab}
  onChange={setTab}
  tabs={[
    { value: 'overview',  label: 'ภาพรวม',     icon: 'ri-dashboard-line' },
    { value: 'fire',      label: 'ถังดับเพลิง', icon: 'ri-fire-line', count: 128 },
    { value: 'users',     label: 'ผู้ใช้งาน',   icon: 'ri-team-line' },
    { value: 'report',    label: 'รายงาน',      icon: 'ri-lock-line', disabled: true },
  ]}
/>

{/* Segmented Control */}
<Tabs
  variant="segmented"
  value={seg}
  onChange={setSeg}
  tabs={[
    { value: 'list', label: 'รายการ', icon: 'ri-list-check'  },
    { value: 'grid', label: 'ตาราง',  icon: 'ri-grid-line'   },
    { value: 'map',  label: 'แผนที่', icon: 'ri-map-pin-line' },
  ]}
/>

{/* Pill Filter */}
<Tabs
  variant="pill"
  value={pill}
  onChange={setPill}
  tabs={[
    { value: 'all',      label: 'ทั้งหมด'  },
    { value: 'active',   label: 'ใช้งาน'   },
    { value: 'draft',    label: 'ร่าง'      },
    { value: 'closed',   label: 'ปิดใช้งาน'  },
  ]}
/>`,si=[{value:"overview",label:"ภาพรวม",icon:"ri-dashboard-line"},{value:"fire",label:"ถังดับเพลิง",icon:"ri-fire-line",count:128},{value:"users",label:"ผู้ใช้งาน",icon:"ri-team-line"},{value:"report",label:"รายงาน",icon:"ri-lock-line",disabled:!0}],pl=[{value:"list",label:"รายการ",icon:"ri-list-check"},{value:"grid",label:"ตาราง",icon:"ri-grid-line"},{value:"map",label:"แผนที่",icon:"ri-map-pin-line"}],xl=[{value:"day",label:"รายวัน"},{value:"month",label:"รายเดือน"},{value:"year",label:"รายปี"}],vl=[{value:"all",label:"ทั้งหมด"},{value:"active",label:"ใช้งาน"},{value:"draft",label:"ร่าง"},{value:"closed",label:"ปิดใช้งาน"}],De={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},hl=()=>{const[i,s]=o.useState("overview"),[l,n]=o.useState("list"),[r,t]=o.useState("day"),[a,c]=o.useState("all"),v=si.find(x=>x.value===i)?.label??"";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:De,children:"Underline Tabs"}),e.jsx(me,{variant:"underline",value:i,onChange:s,tabs:si}),e.jsxs("div",{style:{marginTop:"var(--space-3)",padding:"var(--space-4)",background:"var(--color-surface-input)",borderRadius:"var(--radius-md)",fontSize:13,color:"var(--color-text-body)"},children:['เนื้อหาแท็บ "',v,'"']})]}),e.jsxs("div",{children:[e.jsx("div",{style:De,children:"Segmented Control"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsx(me,{variant:"segmented",value:l,onChange:n,tabs:pl}),e.jsx(me,{variant:"segmented",value:r,onChange:t,tabs:xl})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:De,children:"Pill Filter"}),e.jsx(me,{variant:"pill",value:a,onChange:c,tabs:vl})]})]})},ul=`import { useState } from 'react';
import Input, { FormField } from '@/components/common/Input';
import Button from '@/components/common/Button';
import UIDatePicker from '@/components/common/UIDatePicker';

// ── Input size ────────────────────────────────────────────────
// 'xs'=24px · 'sm'=28px · 'md'=34px (default) · 'lg'=42px · 'xl'=48px
// mirror button sizes → input + button สูงเท่ากันในแถวเดียว

// ── FormField Props ───────────────────────────────────────────
// label    : ข้อความกำกับ
// required : แสดง * สีแดง
// hint     : ข้อความช่วยเหลือ (แสดงเมื่อไม่มี error)
// error    : ข้อความ error (แสดงแทน hint)

// ── Input Props ───────────────────────────────────────────────
// as           : 'input' (default) | 'select' | 'textarea'
// leadingIcon  : Remix Icons class เช่น 'ri-search-line'
// filled       : true เมื่อมีค่า (เปลี่ยน border สี)
// invalid      : true เมื่อ error (border แดง)
// disabled     : ปิดใช้งาน
// size         : xs | sm | md | lg | xl

// ═══════════════════════════════════════════════════════════════

{/* 1. Text Input พื้นฐาน */}
<FormField label="ชื่อสถานที่" required error="กรุณากรอกชื่อสถานที่">
  <Input
    placeholder="เช่น คลังขอนแก่น"
    value={form.name}
    filled={!!form.name}
    invalid={!!errors.name}
    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
  />
</FormField>

{/* 2. Input with Leading Icon */}
<FormField label="รหัสอ้างอิง" required>
  <Input
    placeholder="WH-KK01"
    leadingIcon="ri-barcode-line"
    value={form.code}
    filled={!!form.code}
    invalid={!!errors.code}
    onChange={e => setForm(p => ({ ...p, code: e.target.value }))}
  />
</FormField>

{/* 3. Select */}
<FormField label="จังหวัด" required>
  <Input as="select"
    value={form.province}
    filled={!!form.province}
    onChange={e => setForm(p => ({ ...p, province: e.target.value }))}>
    <option value="" disabled>เลือกจังหวัด</option>
    <option>ขอนแก่น</option>
    <option>อุดรธานี</option>
  </Input>
</FormField>

{/* 4. Number Input with icon */}
<FormField label="ความจุ" hint="จำนวนหน่วย">
  <Input
    type="number"
    placeholder="0"
    leadingIcon="ri-archive-line"
    value={form.capacity}
    filled={!!form.capacity}
    onChange={e => setForm(p => ({ ...p, capacity: e.target.value }))}
  />
</FormField>

{/* 5. Textarea */}
<FormField label="หมายเหตุ" hint="ไม่บังคับ">
  <Input as="textarea" rows={3}
    placeholder="บันทึกเพิ่มเติม..."
    value={form.remark}
    filled={!!form.remark}
    onChange={e => setForm(p => ({ ...p, remark: e.target.value }))}
  />
</FormField>

{/* 6. Disabled */}
<FormField label="รหัสระบบ">
  <Input value="SYS-001" disabled />
</FormField>

{/* 7. Date Picker — วันเดียว */}
<FormField label="วันที่ตรวจ" hint="เลือกวันที่ตรวจสอบ">
  <UIDatePicker
    name="inspectDate"
    placeholder="DD-MM-YYYY"
    dateFormat="d-m-Y"
    value={date}
    clearDate={setDate}
    onChange={(val) => {
      if (val instanceof Date) setDate(val.toLocaleDateString('en-GB'));
      else setDate(val ?? '');
    }}
  />
</FormField>

   <FormField
              label="อีเมล"
              hint="กรอกเฉพาะชื่อผู้ใช้ ระบบจะเติม @ais.co.th อัตโนมัติ"
            >
              <InputEmail
                placeholder="moothod.h"
                suffix="@ais.co.th"
                value={emailUsername}
                filled={!!emailUsername}
                onChange={(e) => setEmailUsername(e.target.value)}
              />
            </FormField>



{/* 8. Date Picker — ช่วงวันที่ (range) */}
<FormField label="ช่วงวันที่รายงาน" hint="เลือกวันเริ่ม–สิ้นสุด">
  <UIDatePicker
    name="reportRange"
    mode="range"
    presets
    placeholder="เลือกช่วงวันที่"
    dateFormat="d-m-Y"
    value={dateRange}
    clearDate={setDateRange}
    onChange={(val) => {
      if (Array.isArray(val) && val.length === 2) {
        const [start, end] = val;
        setDateRange(\`\${start.toLocaleDateString('en-GB')} - \${end.toLocaleDateString('en-GB')}\`);
      }
    }}
  />
</FormField>

{/* 9. Province Select — single (flat list) */}
<FormField label="จังหวัด (Single)" hint="ดึง option จาก /lookup-province">
  <ProvinceSelect
    value={provinceSingle}
    onChange={setProvinceSingle}
    options={provinceOptions}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 9b. Province Select — single + leading icon (เหมือน leftIcon ของ Button) */}
<FormField label="จังหวัด (Single + Icon)" hint="icon ฝั่งซ้าย — เปลี่ยนสีตามสถานะ filled/focus/error">
  <ProvinceSelect
    value={provinceSingle}
    onChange={setProvinceSingle}
    options={provinceOptions}
    icon="ri-map-pin-line"
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 10. Province Select — multi (chips, flat list) */}
<FormField label="จังหวัดที่ดูแล (Multi)" hint="เลือกได้หลายจังหวัด">
  <ProvinceMultiSelect
    values={provinceMulti}
    options={provinceOptions}
    onChangeMulti={setProvinceMulti}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 10b. Province Select — multi + leading icon */}
<FormField label="จังหวัดที่ดูแล (Multi + Icon)" hint="icon ฝั่งซ้าย — รองรับทั้ง single และ multi">
  <ProvinceMultiSelect
    values={provinceMulti}
    options={provinceOptions}
    onChangeMulti={setProvinceMulti}
    icon="ri-map-pin-line"
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 11. Province Select — single (grouped ตามภาค/RO) */}
<FormField label="จังหวัด (RO Group · Single)" hint="ดึง option จาก /lookup-ro-province — มีหัวกลุ่มตามภาค/RO">
  <ProvinceSelect
    value={provinceRoSingle}
    onChange={setProvinceRoSingle}
    options={provinceRoOptions}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 12. Province Select — multi (grouped ตามภาค/RO) */}
<FormField label="จังหวัด (RO Group · Multi)" hint="เลือกได้หลายจังหวัด — จัดกลุ่มตามภาค/RO">
  <ProvinceMultiSelect
    values={provinceRoMulti}
    options={provinceRoOptions}
    onChangeMulti={setProvinceRoMulti}
    placeholder="เลือกจังหวัด..."
  />
</FormField>

{/* 12b. Province Select — sizes ต่างกัน + icon (mirror Input/Button sizes) */}
<ProvinceSelect value={provinceSingle} onChange={setProvinceSingle} options={provinceOptions}
  size="sm" icon="ri-map-pin-line" placeholder="sm 28px" />
<ProvinceSelect value={provinceSingle} onChange={setProvinceSingle} options={provinceOptions}
  size="lg" icon="ri-map-pin-line" placeholder="lg 42px" />

{/* 13. Sizes — ใช้ inline กับ Button ขนาดเดียวกัน */}
<Input size="sm" placeholder="ค้นหา..." leadingIcon="ri-search-line" />
<Button size="sm" variant="primary" leftIcon="ri-search-line">ค้นหา</Button>

{/* 14. Actions */}
<Button variant="soft-danger" leftIcon="ri-close-line">ล้างค่า</Button>
<Button variant="primary"     leftIcon="ri-save-3-line">บันทึก</Button>`,ml=["ขอนแก่น","อุดรธานี","นครราชสีมา","มหาสารคาม","ชัยภูมิ"],Re={name:"",code:"",province:"",capacity:"",remark:""},gl=i=>Array.isArray(i.items),ti=i=>i.map(s=>gl(s)?{label:s.areaName,count:s.count,options:s.items.map(l=>({value:l.key,label:l.text}))}:{value:s.key,label:s.text}),fl="/lookup-province",jl="/lookup-ro-province",ai={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},ni={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow-card)",padding:"var(--space-6)"},de={display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--space-4)"},bl=()=>{const[i,s]=o.useState(Re),[l,n]=o.useState(!1),[r,t]=o.useState(null),[,a]=o.useState(null),c=(h,C)=>{a(h),t(C)},[v,x]=o.useState(!0),[f,A]=o.useState("active"),[m,g]=o.useState(!0),[L,W]=o.useState(0),[te,V]=o.useState(""),[ji,Fe]=o.useState(""),[$,bi]=o.useState([]),[ve,ae]=o.useState(""),[Me,Ie]=o.useState([]),[Ue,yi]=o.useState([]),[Si,Ge]=o.useState(""),[Ci,He]=o.useState([]),[Ve,ki]=o.useState(""),[wi,Ni]=o.useState(null);o.useEffect(()=>{(async()=>{try{const C=await Ke.get(fl);C.success&&bi(ti(C.data))}catch{}})()},[]),o.useEffect(()=>{(async()=>{try{const C=await Ke.get(jl);C.success&&yi(ti(C.data))}catch{}})()},[]);const ne=h=>C=>s(_e=>({..._e,[h]:C.target.value})),K=h=>l&&["name","code","province"].includes(h)&&!i[h];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:ai,children:"Form Fields"}),e.jsxs("div",{style:ni,children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-3)"},children:[e.jsx(j,{label:"ชื่อสถานที่",required:!0,error:K("name")?"กรุณากรอกชื่อสถานที่":void 0,children:e.jsx(b,{placeholder:"เช่น คลังขอนแก่น",value:i.name,filled:!!i.name,invalid:K("name"),onChange:ne("name")})}),e.jsx(j,{label:"รหัสอ้างอิง",required:!0,error:K("code")?"กรุณากรอกรหัส":void 0,children:e.jsx(b,{placeholder:"WH-KK01",leadingIcon:"ri-barcode-line",value:i.code,filled:!!i.code,invalid:K("code"),onChange:ne("code")})}),e.jsx(j,{label:"จังหวัด",required:!0,error:K("province")?"กรุณาเลือกจังหวัด":void 0,children:e.jsxs(b,{as:"select",value:i.province,filled:!!i.province,invalid:K("province"),onChange:ne("province"),children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกจังหวัด"}),ml.map(h=>e.jsx("option",{children:h},h))]})}),e.jsx(j,{label:"ความจุ",hint:"จำนวนหน่วย",children:e.jsx(b,{type:"number",placeholder:"0",leadingIcon:"ri-archive-line",value:i.capacity,filled:!!i.capacity,onChange:ne("capacity")})}),e.jsx(j,{label:"อีเมล",hint:"กรอกเฉพาะชื่อผู้ใช้ ระบบจะเติม @ais.co.th อัตโนมัติ",children:e.jsx(Bi,{placeholder:"moothod.h",suffix:"@ais.co.th",value:Ve,filled:!!Ve,onChange:h=>ki(h.target.value)})}),e.jsx(j,{label:"วันที่ตรวจ",hint:"เลือกวันที่ตรวจสอบ",children:e.jsx(Je,{name:"inspectDate",placeholder:"DD-MM-YYYY",dateFormat:"d-m-Y",value:te,clearDate:V,onChange:h=>{h instanceof Date?V(h.toLocaleDateString("en-GB")):V(typeof h=="string"?h:"")}})}),e.jsx(j,{label:"ช่วงวันที่รายงาน",hint:"เลือกวันเริ่ม–สิ้นสุด",style:{gridColumn:"1 / -1"},children:e.jsx(Je,{name:"reportRange",mode:"range",presets:!0,placeholder:"เลือกช่วงวันที่",dateFormat:"d-m-Y",value:ji,clearDate:Fe,onChange:h=>{if(Array.isArray(h)&&h.length===2){const[C,_e]=h;Fe(`${C.toLocaleDateString("en-GB")} - ${_e.toLocaleDateString("en-GB")}`)}}})}),e.jsx(j,{label:"จังหวัด (Single)",hint:"ดึง option จาก /lookup-province",children:e.jsx(re,{value:ve,onChange:ae,options:$,placeholder:"เลือกจังหวัด..."})}),e.jsx(j,{label:"จังหวัด (Single + Icon)",hint:"icon ฝั่งซ้าย — เหมือน leftIcon ของ Button",children:e.jsx(re,{value:ve,onChange:ae,options:$,icon:"ri-map-pin-line",placeholder:"เลือกจังหวัด..."})}),e.jsx(j,{label:"จังหวัดที่ดูแล (Multi)",hint:"เลือกได้หลายจังหวัด",style:{gridColumn:"1 / -1"},children:e.jsx(Pe,{values:Me,options:$,onChangeMulti:Ie,placeholder:"เลือกจังหวัด..."})}),e.jsx(j,{label:"พนักงาน",children:e.jsx(Ui,{label:"ผู้ถือครองใหม่",required:!0,value:wi,onChange:Ni})}),e.jsx(j,{label:"จังหวัดที่ดูแล (Multi + Icon)",hint:"icon ฝั่งซ้าย — รองรับทั้ง single และ multi",style:{gridColumn:"1 / -1"},children:e.jsx(Pe,{values:Me,options:$,onChangeMulti:Ie,icon:"ri-map-pin-line",placeholder:"เลือกจังหวัด..."})}),e.jsx(j,{label:"จังหวัด (RO Group · Single)",hint:"ดึง option จาก /lookup-ro-province — มีหัวกลุ่มตามภาค/RO",children:e.jsx(re,{value:Si,onChange:Ge,options:Ue,placeholder:"เลือกจังหวัด..."})}),e.jsx(j,{label:"จังหวัด (RO Group · Multi)",hint:"เลือกได้หลายจังหวัด — จัดกลุ่มตามภาค/RO",style:{gridColumn:"1 / -1"},children:e.jsx(Pe,{values:Ci,options:Ue,onChangeMulti:He,placeholder:"เลือกจังหวัด..."})}),e.jsx(j,{label:"จังหวัด (sm + icon)",style:{gridColumn:"1 / -1"},children:e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap"},children:[e.jsx("div",{style:{width:200},children:e.jsx(re,{value:ve,onChange:ae,options:$,size:"sm",icon:"ri-map-pin-line",placeholder:"sm 28px"})}),e.jsx("div",{style:{width:200},children:e.jsx(re,{value:ve,onChange:ae,options:$,size:"lg",icon:"ri-map-pin-line",placeholder:"lg 42px"})})]})}),e.jsx(j,{label:"หมายเหตุ",hint:"ไม่บังคับ",style:{gridColumn:"1 / -1"},children:e.jsx(b,{as:"textarea",rows:3,placeholder:"บันทึกเพิ่มเติม...",value:i.remark,filled:!!i.remark,onChange:ne("remark")})})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-5)",justifyContent:"flex-end"},children:[e.jsx(d,{variant:"soft-danger",leftIcon:"ri-close-line",onClick:()=>{s(Re),n(!1),V(""),Fe(""),ae(""),Ie([]),Ge(""),He([])},children:"ล้างค่า"}),e.jsx(d,{variant:"primary",leftIcon:"ri-save-3-line",onClick:()=>n(!0),children:"บันทึก"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ai,children:"Control Alignment Check — เส้นฐาน 34px"}),e.jsxs("div",{style:ni,children:[e.jsxs("div",{style:{marginBottom:"var(--space-5)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"1 · Input · Button ต้องสูงเท่ากัน (34px)"}),e.jsxs("div",{style:de,children:[e.jsx(b,{placeholder:"คลังขอนแก่น",value:"คลังขอนแก่น",filled:!0,style:{width:180},onChange:()=>{}}),e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",children:"เพิ่ม"}),e.jsx(d,{variant:"outline",leftIcon:"ri-search-line",children:"ค้นหา"}),e.jsx(d,{variant:"edit-outline",size:"icon",leftIcon:"ri-pencil-line","aria-label":"แก้ไข"}),e.jsx(d,{variant:"danger",size:"icon",leftIcon:"ri-delete-bin-line","aria-label":"ลบ"})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-5)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"2 · Input · Select · Input with icon"}),e.jsxs("div",{style:de,children:[e.jsx(b,{placeholder:"ศูนย์ฝึก",style:{width:160}}),e.jsxs(b,{as:"select",filled:!0,style:{width:160},defaultValue:"อุดรธานี",children:[e.jsx("option",{children:"อุดรธานี"}),e.jsx("option",{children:"ขอนแก่น"})]}),e.jsx(b,{placeholder:"ค้นหา...",leadingIcon:"ri-search-line",style:{width:180}})]})]}),e.jsxs("div",{style:{marginBottom:"var(--space-5)"},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"3 · Input · Switch (inline) · Status Toggle (34px)"}),e.jsxs("div",{style:de,children:[e.jsx(b,{value:"50",filled:!0,style:{width:120},onChange:()=>{}}),e.jsx(R,{checked:v,onChange:x,label:"เปิดใช้งาน"}),e.jsx(S,{value:f,onChange:A})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},children:"4 · Radio · Checkbox (inline) · Input sizes (xs → xl)"}),e.jsxs("div",{style:de,children:[e.jsx(xe,{name:"ex-align",checked:L===0,onChange:()=>W(0),children:"กะเช้า"}),e.jsx(xe,{name:"ex-align",checked:L===1,onChange:()=>W(1),children:"กะบ่าย"}),e.jsx(y,{checked:m,onChange:g,children:"หมวกนิรภัย"})]}),e.jsxs("div",{style:{...de,marginTop:"var(--space-3)"},children:[e.jsx(b,{size:"xs",placeholder:"xs 24px",style:{width:100}}),e.jsx(b,{size:"sm",placeholder:"sm 28px",style:{width:110}}),e.jsx(b,{placeholder:"md 34px",style:{width:120}}),e.jsx(b,{size:"lg",placeholder:"lg 42px",style:{width:130}}),e.jsx(b,{size:"xl",placeholder:"xl 48px",style:{width:140}})]})]})]}),e.jsx("div",{className:"sentinel-field",style:{gridColumn:"1 / -1"},children:e.jsx(Mi,{label:"รูปภาพประกอบ",previewUrl:r,onFileChange:c})})]}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-5)",justifyContent:"flex-end"},children:[e.jsxs("button",{className:"sentinel-btn sentinel-btn--soft-danger",onClick:()=>{s(Re),n(!1),t(null),a(null)},children:[e.jsx("i",{className:"ri-close-line"})," ล้างค่า"]}),e.jsxs("button",{className:"sentinel-btn sentinel-btn--primary",onClick:()=>n(!0),children:[e.jsx("i",{className:"ri-save-3-line"})," บันทึก"]})]})]})},yl=`import {
  Checkbox, Radio, ChoiceCard,
  CheckboxGroup, RadioGroup,
} from '@/components/common/RadioCheckbox';

{/* Checkbox states */}
<Checkbox>ยังไม่เลือก</Checkbox>
<Checkbox checked onChange={setV}>เลือกแล้ว</Checkbox>
<Checkbox indeterminate>บางส่วน</Checkbox>
<Checkbox invalid>ต้องยอมรับเงื่อนไข</Checkbox>
<Checkbox disabled>ปิดใช้งาน</Checkbox>
<Checkbox checked disabled>เลือก · ปิดใช้งาน</Checkbox>

{/* Checkbox Group */}
<CheckboxGroup label="อุปกรณ์นิรภัย" required>
  <Checkbox checked={checks[0]} onChange={(v) => toggle(0, v)}>หมวกนิรภัย (Hard hat)</Checkbox>
  <Checkbox checked={checks[1]} onChange={(v) => toggle(1, v)}>รองเท้านิรภัย</Checkbox>
  <Checkbox checked={checks[2]} onChange={(v) => toggle(2, v)}>แว่นตานิรภัย</Checkbox>
  <Checkbox checked={checks[3]} onChange={(v) => toggle(3, v)}>เข็มขัดกันตก</Checkbox>
</CheckboxGroup>

{/* Radio Group */}
<RadioGroup label="กะการทำงาน">
  <Radio name="shift" checked={shift === 0} onChange={() => setShift(0)}>กะเช้า · 06:00–14:00</Radio>
  <Radio name="shift" checked={shift === 1} onChange={() => setShift(1)}>กะบ่าย · 14:00–22:00</Radio>
  <Radio name="shift" checked={shift === 2} onChange={() => setShift(2)}>กะดึก · 22:00–06:00</Radio>
</RadioGroup>

{/* Choice Card */}
<RadioGroup label="ระดับความเสี่ยง">
  <ChoiceCard name="risk" checked={risk === 0} onChange={() => setRisk(0)}>ต่ำ — ตรวจประจำเดือน</ChoiceCard>
  <ChoiceCard name="risk" checked={risk === 1} onChange={() => setRisk(1)}>กลาง — ตรวจประจำสัปดาห์</ChoiceCard>
  <ChoiceCard name="risk" checked={risk === 2} onChange={() => setRisk(2)}>สูง — ตรวจประจำวัน</ChoiceCard>
</RadioGroup>

{/* Size sm */}
<Checkbox size="sm" checked onChange={setV}>ขนาดเล็ก sm</Checkbox>
<Radio name="sm" size="sm" checked onChange={() => {}}>ขนาดเล็ก sm</Radio>

{/* Row layout */}
<CheckboxGroup label="แนวนอน" row>
  <Checkbox checked onChange={setV}>ตัวเลือก A</Checkbox>
  <Checkbox>ตัวเลือก B</Checkbox>
</CheckboxGroup>`,ye={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},Se={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Sl=()=>{const[i,s]=o.useState([!0,!0,!1,!1]),[l,n]=o.useState(0),[r,t]=o.useState(0),[a,c]=o.useState(!1),v=(x,f)=>s(A=>A.map((m,g)=>g===x?f:m));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Se,children:"Checkbox States"}),e.jsxs("div",{style:{...ye,display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsx(y,{children:"ยังไม่เลือก"}),e.jsx(y,{checked:!0,onChange:c,children:"เลือกแล้ว"}),e.jsx(y,{indeterminate:!0,children:"บางส่วน"}),e.jsx(y,{invalid:!0,children:"ต้องยอมรับเงื่อนไข"}),e.jsx(y,{disabled:!0,children:"ปิดใช้งาน"}),e.jsx(y,{checked:!0,disabled:!0,children:"เลือก · ปิดใช้งาน"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Se,children:"Groups in Context"}),e.jsxs("div",{style:{...ye,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsx(qe,{label:"อุปกรณ์นิรภัย",required:!0,children:["หมวกนิรภัย (Hard hat)","รองเท้านิรภัย","แว่นตานิรภัย","เข็มขัดกันตก"].map((x,f)=>e.jsx(y,{checked:i[f],onChange:A=>v(f,A),children:x},x))}),e.jsx(Xe,{label:"กะการทำงาน",children:["กะเช้า · 06:00–14:00","กะบ่าย · 14:00–22:00","กะดึก · 22:00–06:00"].map((x,f)=>e.jsx(xe,{name:"ex-shift",checked:l===f,onChange:()=>n(f),children:x},x))}),e.jsx(Xe,{label:"ระดับความเสี่ยง (Choice Card)",children:["ต่ำ — ตรวจประจำเดือน","กลาง — ตรวจประจำสัปดาห์","สูง — ตรวจประจำวัน"].map((x,f)=>e.jsx(Pi,{name:"ex-risk",checked:r===f,onChange:()=>t(f),children:x},x))})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Se,children:"Size — sm"}),e.jsxs("div",{style:{...ye,display:"flex",gap:"var(--space-6)",flexWrap:"wrap"},children:[e.jsx(y,{size:"sm",checked:!0,onChange:c,children:"Checkbox sm"}),e.jsx(y,{size:"sm",children:"Checkbox sm ยังไม่เลือก"}),e.jsx(xe,{name:"ex-sm",size:"sm",checked:!0,onChange:()=>{},children:"Radio sm"}),e.jsx(xe,{name:"ex-sm",size:"sm",children:"Radio sm ยังไม่เลือก"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Se,children:"Row Layout"}),e.jsx("div",{style:ye,children:e.jsxs(qe,{label:"แนวนอน (row)",row:!0,children:[e.jsx(y,{checked:!0,onChange:c,children:"ตัวเลือก A"}),e.jsx(y,{children:"ตัวเลือก B"}),e.jsx(y,{children:"ตัวเลือก C"})]})})]})]})},Cl=`import { useState } from 'react';
import StatusToggle, { type StatusValue } from '@/components/common/StatusToggle';

// value: 'active' | 'inactive' | 'neutral' | null  ← null = ยังไม่เลือก

// ── ยังไม่เลือก (null) ────────────────────────────────────────
const [status, setStatus] = useState<StatusValue>(null);
<StatusToggle value={null} onChange={setStatus} />

// ── ใช้งานพื้นฐาน (2 ตัวเลือก) ──────────────────────────────
const [status, setStatus] = useState<StatusValue>('active');
<StatusToggle value={status} onChange={setStatus} />

// ── size sm ───────────────────────────────────────────────────
<StatusToggle value={status} onChange={setStatus} size="sm" />

// ── custom label ──────────────────────────────────────────────
<StatusToggle
  value={status} onChange={setStatus}
  activeLabel="เปิดใช้" inactiveLabel="ปิดใช้"
/>

// ── disabled ──────────────────────────────────────────────────
<StatusToggle value="active"   onChange={() => {}} disabled />
<StatusToggle value="inactive" onChange={() => {}} disabled />
<StatusToggle value={null}     onChange={() => {}} disabled />

// ── 3 ตัวเลือก (showNeutral) — เพิ่ม "neutral" สีเทาเข้ม ──────
const [status3, setStatus3] = useState<StatusValue>('neutral');
<StatusToggle
  value={status3} onChange={setStatus3}
  showNeutral
  activeLabel="ใช้งาน" inactiveLabel="ปิดใช้งาน" neutralLabel="รอดำเนินการ"
/>

// ── 3 ตัวเลือก + size sm ────────────────────────────────────
<StatusToggle
  value={status3} onChange={setStatus3}
  showNeutral size="sm"
  activeLabel="อนุมัติ" inactiveLabel="ไม่อนุมัติ" neutralLabel="รอตรวจสอบ"
/>

// ── 3 ตัวเลือก + disabled ───────────────────────────────────
<StatusToggle value="neutral" onChange={() => {}} showNeutral disabled />`,O={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},M={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},u={fontSize:12,fontWeight:700,color:"var(--color-text-muted)",marginBottom:"var(--space-2)"},B=({def:i,disabled:s=!1,size:l="md",activeLabel:n,inactiveLabel:r})=>{const[t,a]=o.useState(i);return e.jsx(S,{value:t,onChange:a,disabled:s,size:l,activeLabel:n,inactiveLabel:r})},Ae=({def:i,disabled:s=!1,size:l="md",activeLabel:n,inactiveLabel:r,neutralLabel:t})=>{const[a,c]=o.useState(i);return e.jsx(S,{value:a,onChange:c,disabled:s,size:l,showNeutral:!0,activeLabel:n,inactiveLabel:r,neutralLabel:t})},kl=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Unselected — ยังไม่เลือก (null)"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"static null"}),e.jsx(S,{value:null,onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"interactive → กดแล้วเลือกได้"}),e.jsx(B,{def:null})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"disabled null"}),e.jsx(S,{value:null,onChange:()=>{},disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"States"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"เลือก active"}),e.jsx(S,{value:"active",onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"เลือก inactive"}),e.jsx(S,{value:"inactive",onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"disabled (active)"}),e.jsx(S,{value:"active",onChange:()=>{},disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"disabled (inactive)"}),e.jsx(S,{value:"inactive",onChange:()=>{},disabled:!0})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Size — md / sm"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap",alignItems:"flex-end"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"md (default 34px)"}),e.jsx(S,{value:"active",onChange:()=>{},size:"md"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"sm (28px)"}),e.jsx(S,{value:"active",onChange:()=>{},size:"sm"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Custom Label"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"เปิดใช้ / ปิดใช้"}),e.jsx(B,{def:"active",activeLabel:"เปิดใช้",inactiveLabel:"ปิดใช้"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"ใช้งาน / ไม่ใช้งาน"}),e.jsx(B,{def:"inactive",activeLabel:"ใช้งาน",inactiveLabel:"ไม่ใช้งาน"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"sm + custom label"}),e.jsx(B,{def:"active",size:"sm",activeLabel:"เปิด",inactiveLabel:"ปิด"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Triple — 3 ตัวเลือก (showNeutral, สีเทาเข้ม)"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"ใช้งาน / ปิดใช้งาน / รอดำเนินการ"}),e.jsx(Ae,{def:"neutral",activeLabel:"ใช้งาน",inactiveLabel:"ปิดใช้งาน",neutralLabel:"รอดำเนินการ"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"อนุมัติ / ไม่อนุมัติ / รอตรวจสอบ (sm)"}),e.jsx(Ae,{def:"active",size:"sm",activeLabel:"อนุมัติ",inactiveLabel:"ไม่อนุมัติ",neutralLabel:"รอตรวจสอบ"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"disabled (neutral)"}),e.jsx(S,{value:"neutral",onChange:()=>{},showNeutral:!0,disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"ยังไม่เลือก + 3 ตัวเลือก"}),e.jsx(Ae,{def:null,activeLabel:"ใช้งาน",inactiveLabel:"ปิดใช้งาน",neutralLabel:"รอดำเนินการ"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Interactive — กดสลับได้"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"สถานะสถานที่"}),e.jsx(B,{def:"active"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"สถานะผู้ใช้"}),e.jsx(B,{def:"inactive"})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"สถานะอุปกรณ์"}),e.jsx(B,{def:"active"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:M,children:"Interactive — disabled"}),e.jsxs("div",{style:{...O,display:"flex",gap:"var(--space-10)",flexWrap:"wrap"},children:[e.jsxs("div",{children:[e.jsx("div",{style:u,children:"disabled active"}),e.jsx(B,{def:"active",disabled:!0})]}),e.jsxs("div",{children:[e.jsx("div",{style:u,children:"disabled inactive"}),e.jsx(B,{def:"inactive",disabled:!0})]})]})]})]}),wl=`import Switch from '@/components/common/Switch';

{/* md (default) */}
<Switch checked={on} onChange={setOn} label="แจ้งเตือนทาง Email" />

{/* sm */}
<Switch checked={on} onChange={setOn} size="sm" label="รายงานรายสัปดาห์" />

{/* ไม่มี label */}
<Switch checked={on} onChange={setOn} />

{/* disabled */}
<Switch checked disabled label="ปิดใช้งาน" />`,Le={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Nl={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)",maxWidth:420},Tl={display:"flex",alignItems:"center",justifyContent:"space-between",gap:"var(--space-4)",padding:"var(--space-3) 0",borderBottom:"1px solid var(--color-border-default)"},ce=({label:i,defaultOn:s=!1,size:l="md"})=>{const[n,r]=o.useState(s);return e.jsxs("div",{style:Tl,children:[e.jsx("span",{style:{fontSize:13,color:"var(--color-text-body)",fontWeight:500},children:i}),e.jsx(R,{checked:n,onChange:r,size:l})]})},zl=()=>{const[i,s]=o.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Le,children:"Sizes & States"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(R,{defaultChecked:!0,label:"md (default)"}),e.jsx(R,{size:"sm",defaultChecked:!0,label:"sm"}),e.jsx(R,{disabled:!0,label:"disabled off"}),e.jsx(R,{checked:!0,onChange:()=>{},disabled:!0,label:"disabled on"}),e.jsx(R,{})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Le,children:"Settings Panel"}),e.jsxs("div",{style:Nl,children:[e.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--color-text-heading)",marginBottom:"var(--space-3)"},children:"การตั้งค่าการแจ้งเตือน"}),e.jsx(ce,{label:"แจ้งเตือนทาง Email",defaultOn:!0}),e.jsx(ce,{label:"แจ้งเตือนใน App",defaultOn:!0}),e.jsx(ce,{label:"แจ้งเตือน SMS",defaultOn:!1}),e.jsx(ce,{label:"รายงานรายสัปดาห์",defaultOn:!0,size:"sm"}),e.jsx(ce,{label:"แสดงในปฏิทินสาธารณะ",defaultOn:!1,size:"sm"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:Le,children:"Status Toggle"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(E,{variant:i?"success":"neutral",style:{cursor:"pointer",userSelect:"none"},onClick:()=>s(l=>!l),children:i?"ใช้งาน":"ปิดใช้งาน"}),e.jsx(R,{checked:i,onChange:s}),e.jsx("span",{style:{fontSize:12,color:"var(--color-text-muted)"},children:"คลิก badge หรือ switch เพื่อสลับสถานะ"})]})]})]})},Fl=`import Modal, { ModalRowDouble, ModalRow } from '@/components/common/Modal';
import Button from '@/components/common/Button';
import type { ToastMessage, ToastVariant } from '@/pages/sentinel_design/examples/services/ExamplesType';

// ── variant: 'add' (เขียว) | 'edit' (อำพัน) | 'info' (น้ำเงิน)
// ── size:    'sm'(420) | 'md'(560) | 'lg'(720) | 'xl'(960) | '2xl'(1320)

{/* ── Add — เขียว ── */}
<Modal
  open={open} onClose={close}
  size="md" variant="add"
  icon="ri-add-line"
  title="เพิ่มสถานที่" subtitle="Location Config"
  footer={
    <>
      <Button variant="soft-danger" size="lg" leftIcon="ri-close-line"  onClick={close}>ยกเลิก</Button>
      <Button variant="primary"     size="lg" leftIcon="ri-save-3-line" onClick={save}>บันทึก</Button>
    </>
  }
>
  <ModalRowDouble>
    <div className="sentinel-field">
      <label className="sentinel-field__label">ชื่อสถานที่<span className="sentinel-req">*</span></label>
      <input className="sentinel-input" type="text" placeholder="เช่น คลังขอนแก่น" />
    </div>
    <div className="sentinel-field">
      <label className="sentinel-field__label">จังหวัด<span className="sentinel-req">*</span></label>
      <select className="sentinel-input">
        <option value="">เลือกจังหวัด</option>
        <option>ขอนแก่น</option>
      </select>
    </div>
  </ModalRowDouble>
  <ModalRow>
    <div className="sentinel-field">
      <label className="sentinel-field__label">หมายเหตุ</label>
      <textarea className="sentinel-input" rows={3} placeholder="รายละเอียดเพิ่มเติม" />
    </div>
  </ModalRow>
</Modal>

{/* ── Edit — อำพัน ── */}
<Modal
  open={open} onClose={close}
  size="md" variant="edit"
  icon="ri-pencil-line"
  title="แก้ไขสถานที่" subtitle="Safety Talk · Location Config"
  footer={
    <>
      <Button variant="soft-danger" size="lg" leftIcon="ri-close-line"  onClick={close}>ยกเลิก</Button>
      <Button variant="primary"     size="lg" leftIcon="ri-save-3-line" onClick={save}>บันทึก</Button>
    </>
  }
>
  <ModalRowDouble>…</ModalRowDouble>
</Modal>

{/* ── Info / Read-only — น้ำเงิน ── */}
<Modal
  open={open} onClose={close}
  size="md" variant="info"
  icon="ri-eye-line"
  title="รายละเอียดสถานที่" subtitle="ข้อมูลแบบอ่านอย่างเดียว"
>
  <ModalRowDouble>…</ModalRowDouble>
</Modal>

{/* ── Confirm / Success / Error — ดู AlertDialog component ── */}
{/* ดูตัวอย่างเต็มที่ '@/pages/sentinel_design/examples/components/ExAlertDialogSection' */}

{/* ── No Footer — ไม่ส่ง footer prop เลย ── */}
{/* กรณี 1: read-only — ปิดด้วย ✕ หรือคลิก Overlay */}
<Modal
  open={open} onClose={close}
  size="md" variant="info"
  icon="ri-eye-line"
  title="รายละเอียดสถานที่" subtitle="ข้อมูลแบบอ่านอย่างเดียว"
>
  <ModalRowDouble>…</ModalRowDouble>
</Modal>

{/* กรณี 2: มีปุ่มอยู่ใน body โดยตรง ไม่ต้องการ footer bar */}
<Modal
  open={open} onClose={close}
  size="sm" variant="add"
  icon="ri-add-line"
  title="เพิ่มรหัสอ้างอิง" subtitle="ปุ่มอยู่ใน body"
>
  <ModalRow>…</ModalRow>
  <ModalRow>
    <div style={{ display: 'flex', gap: 'var(--space-2)', justifyContent: 'flex-end' }}>
      <Button variant="soft-danger" size="md" leftIcon="ri-close-line"  onClick={close}>ยกเลิก</Button>
      <Button variant="primary"     size="md" leftIcon="ri-save-3-line" onClick={save}>บันทึก</Button>
    </div>
  </ModalRow>
</Modal>`,Z={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Q={display:"flex",gap:"var(--space-2)",flexWrap:"wrap",alignItems:"center"},J={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},ri={success:{icon:"ri-check-line",title:"ลบสำเร็จ",sub:'ลบ "ศูนย์บริการบ้านไผ่" ออกจากระบบแล้ว',ttl:3500},edit:{icon:"ri-pencil-line",title:"บันทึกสำเร็จ",sub:"ข้อมูลถูกอัปเดตเรียบร้อยแล้ว",ttl:3500},error:{icon:"ri-error-warning-fill",title:"เกิดข้อผิดพลาด",sub:"ไม่สามารถบันทึกได้ กรุณาลองใหม่",ttl:6e3},warning:{icon:"ri-tools-line",title:"คำเตือน",sub:"กรุณาตรวจสอบข้อมูลอีกครั้ง",ttl:4500},cancel:{icon:"ri-close-circle-line",title:"ยกเลิกแล้ว",sub:"รายการถูกยกเลิกเรียบร้อย",ttl:3500}};let Il=0;const U=({filled:i=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["ชื่อสถานที่",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"text",placeholder:"เช่น คลังขอนแก่น",defaultValue:i?"ศูนย์บริการบ้านไผ่":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["จังหวัด",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsxs("select",{className:`sentinel-input${i?" is-filled":""}`,defaultValue:i?"ขอนแก่น":"",children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกจังหวัด"}),e.jsx("option",{children:"ขอนแก่น"}),e.jsx("option",{children:"อุดรธานี"}),e.jsx("option",{children:"นครราชสีมา"})]})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"รหัสอ้างอิง"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"text",placeholder:"WH-XX00",defaultValue:i?"WH-KK01":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ความจุ"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"number",placeholder:"0",defaultValue:i?"50":""})]})]}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"หมายเหตุ"}),e.jsx("textarea",{className:`sentinel-input${i?" is-filled":""}`,rows:3,placeholder:"รายละเอียดเพิ่มเติม (ถ้ามี)",defaultValue:i?"พื้นที่ชั้น 1 อาคาร A ใกล้ประตูทางเข้าหลัก":""})]})})]}),Ce=({filled:i=!1})=>e.jsxs(e.Fragment,{children:[e.jsxs(se,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ผู้รับผิดชอบ"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"text",placeholder:"ชื่อผู้รับผิดชอบ",defaultValue:i?"นายสมชาย ใจดี":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"เบอร์ติดต่อ"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"tel",placeholder:"0XX-XXX-XXXX",defaultValue:i?"043-123-456":""})]})]}),e.jsxs(se,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"วันที่เริ่มใช้งาน"}),e.jsx("input",{className:`sentinel-input${i?" is-filled":""}`,type:"date",defaultValue:i?"2024-01-01":""})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ประเภทสถานที่"}),e.jsxs("select",{className:`sentinel-input${i?" is-filled":""}`,defaultValue:i?"warehouse":"",children:[e.jsx("option",{value:"",disabled:!0,children:"เลือกประเภท"}),e.jsx("option",{value:"warehouse",children:"คลังสินค้า"}),e.jsx("option",{value:"office",children:"สำนักงาน"}),e.jsx("option",{value:"factory",children:"โรงงาน"})]})]})]})]}),D=({onClose:i,onSave:s})=>e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:i,children:"ยกเลิก"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",onClick:s,children:"บันทึก"})]}),_l=()=>{const[i,s]=o.useState(!1),[l,n]=o.useState(!1),[r,t]=o.useState(!1),a=o.useCallback(()=>{n(!1),s(!0)},[]),c=o.useCallback(()=>{s(!1),n(!1)},[]),v=o.useCallback(()=>{n(!1)},[]),x=o.useCallback(async()=>{t(!0),await new Promise(f=>setTimeout(f,700)),t(!1),n(!0)},[]);return e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",onClick:a,children:"เพิ่มสถานที่ (จำลอง error)"}),e.jsx(T,{open:i,onClose:c,size:"md",variant:"add",icon:"ri-add-line",title:"เพิ่มสถานที่",subtitle:"Location Config",errorMessage:l?"บันทึกไม่สำเร็จ กรุณาตรวจสอบข้อมูลแล้วลองใหม่อีกครั้ง":void 0,onErrorClose:v,footer:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:c,disabled:r,children:"ยกเลิก"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-save-3-line",onClick:x,loading:r,children:"บันทึก"})]}),children:e.jsx(U,{})})]})},Bl=()=>{const[i,s]=o.useState(null),[l,n]=o.useState([]),r=o.useRef(null),t=o.useCallback(g=>s(g),[]),a=o.useCallback(()=>s(null),[]),c=o.useCallback(g=>{n(L=>L.filter(W=>W.id!==g))},[]),v=o.useCallback((g,L)=>{const W=++Il,te=ri[g];n(V=>[{id:W,variant:g,title:L?.title??te.title,sub:L?.sub??te.sub},...V]),setTimeout(()=>c(W),te.ttl)},[c]),x=o.useCallback(()=>{a(),v("success",{title:"บันทึกสำเร็จ",sub:"ข้อมูลสถานที่ถูกบันทึกเข้าระบบแล้ว"})},[a,v]),f=o.useCallback(()=>{a(),r.current=setTimeout(()=>t("error"),280)},[a,t]),A=o.useCallback(()=>{a(),v("success",{title:"ลบสำเร็จ",sub:'ลบ "ศูนย์บริการบ้านไผ่" ออกจากระบบแล้ว'})},[a,v]),m=o.useCallback(g=>i===g,[i]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Z,children:"Variant — add (เขียว) · edit (อำพัน) · info (น้ำเงิน)"}),e.jsx("div",{style:J,children:e.jsxs("div",{style:Q,children:[e.jsx(d,{variant:"primary",leftIcon:"ri-add-line",onClick:()=>t("add-md"),children:"add · md"}),e.jsx(d,{variant:"edit",leftIcon:"ri-pencil-line",onClick:()=>t("edit-md"),children:"edit · md"}),e.jsx(d,{variant:"info-outline",leftIcon:"ri-eye-line",onClick:()=>t("info-md"),children:"info · md"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Z,children:"Size — sm · md · lg · xl · 2xl"}),e.jsx("div",{style:J,children:e.jsxs("div",{style:Q,children:[e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>t("add-sm"),children:"sm · 420px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>t("add-md"),children:"md · 560px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>t("add-lg"),children:"lg · 720px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>t("add-xl"),children:"xl · 960px"}),e.jsx(d,{variant:"outline",leftIcon:"ri-expand-left-right-line",onClick:()=>t("add-2xl"),children:"2xl · 1320px"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Z,children:"Alert Dialog — confirm-warning · confirm-info · error"}),e.jsx("div",{style:J,children:e.jsxs("div",{style:Q,children:[e.jsx(d,{variant:"edit-outline",leftIcon:"ri-alert-line",onClick:()=>t("confirm-warning"),children:"confirm · warning"}),e.jsx(d,{variant:"info-outline",leftIcon:"ri-question-line",onClick:()=>t("confirm-info"),children:"confirm · info"}),e.jsx(d,{variant:"soft-danger",leftIcon:"ri-close-circle-line",onClick:()=>t("error"),children:"error"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Z,children:"Real-world — ลบสถานที่ · confirm danger → Toast success | AlertDialog error"}),e.jsx("div",{style:J,children:e.jsxs("div",{style:Q,children:[e.jsx(d,{variant:"danger",leftIcon:"ri-delete-bin-line",onClick:()=>t("confirm-danger"),children:"confirm · danger → error"}),e.jsx(d,{variant:"danger",leftIcon:"ri-delete-bin-line",onClick:()=>t("confirm-danger-toast"),children:"confirm · danger → Toast"})]})}),e.jsx(oe,{open:m("confirm-danger"),onClose:a,kind:"confirm",tone:"danger",icon:"ri-delete-bin-line",title:"ยืนยันการลบ?",description:e.jsxs(e.Fragment,{children:["ต้องการลบ ",e.jsx("strong",{children:"ศูนย์บริการบ้านไผ่"})," ออกจากระบบหรือไม่?",e.jsx("br",{}),"การดำเนินการนี้ไม่สามารถย้อนกลับได้"]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:a,children:"ยกเลิก"}),e.jsx(d,{variant:"danger",size:"lg",leftIcon:"ri-delete-bin-line",onClick:f,children:"ยืนยันลบ"})]})}),e.jsx(oe,{open:m("confirm-danger-toast"),onClose:a,kind:"confirm",tone:"danger",icon:"ri-delete-bin-line",title:"ยืนยันการลบ?",description:e.jsxs(e.Fragment,{children:["ต้องการลบ ",e.jsx("strong",{children:"ศูนย์บริการบ้านไผ่"})," ออกจากระบบหรือไม่?",e.jsx("br",{}),"การดำเนินการนี้ไม่สามารถย้อนกลับได้"]}),actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:a,children:"ยกเลิก"}),e.jsx(d,{variant:"danger",size:"lg",leftIcon:"ri-delete-bin-line",onClick:A,children:"ยืนยันลบ"})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Z,children:'Real-world — เพิ่มสถานที่ · กดบันทึก → Modal variant="error"'}),e.jsx("div",{style:J,children:e.jsx("div",{style:Q,children:e.jsx(_l,{})})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Z,children:"No Footer — ไม่ส่ง footer prop → footer ไม่แสดง"}),e.jsx("div",{style:J,children:e.jsx("div",{style:Q,children:e.jsx(d,{variant:"info-outline",leftIcon:"ri-eye-line",onClick:()=>t("no-footer-info"),children:"info · ไม่มี footer"})})})]}),e.jsxs(T,{open:m("no-footer-info"),onClose:a,size:"md",variant:"info",icon:"ri-eye-line",title:"รายละเอียดสถานที่",subtitle:"ข้อมูลแบบอ่านอย่างเดียว — ปิดด้วย ✕ หรือคลิกนอก modal",children:[e.jsxs(se,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ชื่อสถานที่"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"ศูนย์บริการบ้านไผ่",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"จังหวัด"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"ขอนแก่น",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"รหัสอ้างอิง"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"WH-KK01",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ความจุ"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"50",readOnly:!0})]})]}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"หมายเหตุ"}),e.jsx("textarea",{className:"sentinel-input is-filled",rows:3,defaultValue:"พื้นที่ชั้น 1 อาคาร A ใกล้ประตูทางเข้าหลัก",readOnly:!0})]})})]}),e.jsxs(T,{open:m("add-sm"),onClose:a,size:"sm",variant:"add",icon:"ri-add-line",title:"เพิ่มรหัสอ้างอิง",subtitle:"เพิ่มรหัสใหม่เข้าระบบ",footer:e.jsx(D,{onClose:a,onSave:x}),children:[e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["รหัสอ้างอิง",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"WH-XX00"})]})}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"คำอธิบาย"}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"คำอธิบายสั้นๆ"})]})})]}),e.jsx(T,{open:m("add-md"),onClose:a,size:"md",variant:"add",icon:"ri-add-line",title:"เพิ่มสถานที่",subtitle:"กรอกข้อมูลสถานที่จัดเก็บใหม่",footer:e.jsx(D,{onClose:a,onSave:x}),children:e.jsx(U,{})}),e.jsxs(T,{open:m("add-lg"),onClose:a,size:"lg",variant:"add",icon:"ri-building-line",title:"เพิ่มสถานที่ (lg)",subtitle:"ฟอร์มขนาดกลาง — หลาย section",footer:e.jsx(D,{onClose:a,onSave:x}),children:[e.jsx(U,{}),e.jsx(Ce,{})]}),e.jsxs(T,{open:m("add-xl"),onClose:a,size:"xl",variant:"add",icon:"ri-map-pin-add-line",title:"เพิ่มสถานที่ (xl)",subtitle:"ฟอร์มขนาดใหญ่ — หลาย section + ข้อมูลเสริม",footer:e.jsx(D,{onClose:a,onSave:x}),children:[e.jsx(U,{}),e.jsx(Ce,{}),e.jsxs(se,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ละติจูด"}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"16.4321"})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ลองจิจูด"}),e.jsx("input",{className:"sentinel-input",type:"text",placeholder:"102.8358"})]})]}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ที่อยู่เต็ม"}),e.jsx("textarea",{className:"sentinel-input",rows:2,placeholder:"เลขที่ ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"})]})})]}),e.jsxs(T,{open:m("add-2xl"),onClose:a,size:"2xl",variant:"add",icon:"ri-table-line",title:"จัดการสถานที่ (2xl)",subtitle:"full-width — สำหรับ table หรือ layout ซับซ้อน",footer:e.jsx(D,{onClose:a,onSave:x}),children:[e.jsx(U,{}),e.jsx(Ce,{}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ที่อยู่เต็ม"}),e.jsx("textarea",{className:"sentinel-input",rows:2,placeholder:"เลขที่ ถนน ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"})]})}),e.jsx(z,{children:e.jsxs("div",{style:{background:"var(--color-surface-input)",border:"1px dashed var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",textAlign:"center",color:"var(--color-text-subtle)",fontSize:13},children:[e.jsx("i",{className:"ri-table-line",style:{fontSize:24,display:"block",marginBottom:8},"aria-hidden":"true"}),"พื้นที่สำหรับ Table หรือ Map component"]})})]}),e.jsxs(T,{open:m("edit-sm"),onClose:a,size:"sm",variant:"edit",icon:"ri-pencil-line",title:"แก้ไขรหัส",subtitle:"แก้ไขรหัสอ้างอิงสถานที่",footer:e.jsx(D,{onClose:a,onSave:x}),children:[e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsxs("label",{className:"sentinel-field__label",children:["รหัสอ้างอิง",e.jsx("span",{className:"sentinel-req",children:"*"})]}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"WH-KK01"})]})}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"คำอธิบาย"}),e.jsx("input",{className:"sentinel-input is-filled",type:"text",defaultValue:"คลังขอนแก่น หลัก"})]})})]}),e.jsx(T,{open:m("edit-md"),onClose:a,size:"md",variant:"edit",icon:"ri-pencil-line",title:"แก้ไขสถานที่",subtitle:"แก้ไขข้อมูลสถานที่จัดเก็บ",footer:e.jsx(D,{onClose:a,onSave:x}),children:e.jsx(U,{filled:!0})}),e.jsxs(T,{open:m("edit-lg"),onClose:a,size:"lg",variant:"edit",icon:"ri-edit-box-line",title:"แก้ไขสถานที่ (lg)",subtitle:"ข้อมูลหลัก + ข้อมูลเสริม",footer:e.jsx(D,{onClose:a,onSave:x}),children:[e.jsx(U,{filled:!0}),e.jsx(Ce,{filled:!0})]}),e.jsxs(T,{open:m("info-md"),onClose:a,size:"md",variant:"info",icon:"ri-eye-line",title:"รายละเอียดสถานที่",subtitle:"ข้อมูลแบบอ่านอย่างเดียว",footer:e.jsx(d,{variant:"outline",size:"lg",leftIcon:"ri-close-line",onClick:a,children:"ปิด"}),children:[e.jsxs(se,{children:[e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ชื่อสถานที่"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"ศูนย์บริการบ้านไผ่",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"จังหวัด"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"ขอนแก่น",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"รหัสอ้างอิง"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"WH-KK01",readOnly:!0})]}),e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"ความจุ"}),e.jsx("input",{className:"sentinel-input",type:"text",defaultValue:"50",readOnly:!0})]})]}),e.jsx(z,{children:e.jsxs("div",{className:"sentinel-field",children:[e.jsx("label",{className:"sentinel-field__label",children:"หมายเหตุ"}),e.jsx("textarea",{className:"sentinel-input",rows:3,defaultValue:"พื้นที่ชั้น 1 อาคาร A ใกล้ประตูทางเข้าหลัก",readOnly:!0})]})})]}),e.jsx(oe,{open:m("confirm-warning"),onClose:a,kind:"confirm",tone:"warning",icon:"ri-alert-line",title:"ยังไม่ได้บันทึก",description:"คุณมีข้อมูลที่ยังไม่ได้บันทึก ต้องการออกจากหน้านี้หรือไม่?",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"outline",size:"lg",leftIcon:"ri-arrow-go-back-line",onClick:a,children:"กลับไปแก้ไข"}),e.jsx(d,{variant:"edit",size:"lg",leftIcon:"ri-door-open-line",onClick:a,children:"ออกโดยไม่บันทึก"})]})}),e.jsx(oe,{open:m("confirm-info"),onClose:a,kind:"confirm",tone:"info",icon:"ri-send-plane-line",title:"ยืนยันการส่งข้อมูล?",description:"ระบบจะส่งรายงานประจำเดือนไปยังผู้ดูแลระบบทันที",actions:e.jsxs(e.Fragment,{children:[e.jsx(d,{variant:"soft-danger",size:"lg",leftIcon:"ri-close-line",onClick:a,children:"ยกเลิก"}),e.jsx(d,{variant:"primary",size:"lg",leftIcon:"ri-send-plane-line",onClick:x,children:"ยืนยัน"})]})}),e.jsx(oe,{open:m("error"),onClose:a,kind:"error",icon:"ri-close-circle-line",title:"เกิดข้อผิดพลาด",description:"ไม่สามารถลบข้อมูลได้ในขณะนี้ กรุณาลองใหม่อีกครั้ง",actions:e.jsxs("button",{type:"button",className:"sentinel-btn sentinel-btn--soft-danger sentinel-btn--block",onClick:a,children:[e.jsx("i",{className:"ri-check-line","aria-hidden":"true"}),"รับทราบ"]})}),l.length>0&&e.jsx("div",{style:{position:"fixed",bottom:24,right:24,zIndex:9999,display:"flex",flexDirection:"column",gap:12},children:l.map(g=>e.jsxs("div",{className:`sentinel-toast sentinel-toast--${g.variant}`,style:{cursor:"pointer"},onClick:()=>c(g.id),role:"alert",children:[e.jsx("div",{className:"sentinel-toast__icon",children:e.jsx("i",{className:ri[g.variant].icon,"aria-hidden":"true"})}),e.jsxs("div",{className:"sentinel-toast__body",children:[e.jsx("div",{className:"sentinel-toast__title",children:g.title}),e.jsx("div",{className:"sentinel-toast__sub",children:g.sub})]})]},g.id))})]})},Pl=`{/* Toast variants */}
<div className="sentinel-toast sentinel-toast--success">
  <div className="sentinel-toast__icon"><i className="ri-check-line" /></div>
  <div className="sentinel-toast__body">
    <div className="sentinel-toast__title">เพิ่มสำเร็จ</div>
    <div className="sentinel-toast__sub">WH-NEW ถูกเพิ่มเรียบร้อยแล้ว</div>
  </div>
</div>

<div className="sentinel-toast sentinel-toast--edit">
  <div className="sentinel-toast__icon"><i className="ri-pencil-line" /></div>
  <div className="sentinel-toast__body">
    <div className="sentinel-toast__title">บันทึกการแก้ไขแล้ว</div>
    <div className="sentinel-toast__sub">WH-CBI อัปเดตเรียบร้อย</div>
  </div>
</div>

<div className="sentinel-toast sentinel-toast--error">
  <div className="sentinel-toast__icon"><i className="ri-error-warning-fill" /></div>
  <div className="sentinel-toast__body">
    <div className="sentinel-toast__title">เกิดข้อผิดพลาด</div>
    <div className="sentinel-toast__sub">ไม่สามารถบันทึกได้ กรุณาลองใหม่</div>
  </div>
</div>

{/* Live toast stack — fixed bottom-right */}
<div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
  {toasts.map(t => (
    <div key={t.id} className={\`sentinel-toast sentinel-toast--\${t.variant}\`}
      onClick={() => dismiss(t.id)}>
      ...
    </div>
  ))}
</div>`,pe={success:{icon:"ri-check-line",title:"เพิ่มคลังสินค้าสำเร็จ",sub:"WH-NEW ถูกเพิ่มเรียบร้อยแล้ว",ttl:3500},edit:{icon:"ri-pencil-line",title:"บันทึกการแก้ไขแล้ว",sub:"WH-CBI อัปเดตเรียบร้อย",ttl:3500},error:{icon:"ri-error-warning-fill",title:"เกิดข้อผิดพลาด",sub:"ไม่สามารถบันทึกได้ กรุณาลองใหม่",ttl:6e3},warning:{icon:"ri-tools-line",title:"อัปเดตสถานะ: ชำรุด",sub:"FX-KKN-20-0003 บันทึกสถานะชำรุดแล้ว",ttl:4500},cancel:{icon:"ri-close-circle-line",title:"ยกเลิกรายการแล้ว",sub:"FX-KKN-20-0001 ถูกปลดออกจากระบบ",ttl:3500}};let El=0;const Dl=()=>{const[i,s]=o.useState([]),l=o.useCallback(r=>{s(t=>t.filter(a=>a.id!==r))},[]),n=r=>{const t=++El,a=pe[r];s(c=>[{id:t,variant:r,title:a.title,sub:a.sub},...c]),setTimeout(()=>l(t),a.ttl)};return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-4)",marginBottom:"var(--space-5)"},children:["success","edit","error","warning","cancel"].map(r=>e.jsxs("div",{className:`sentinel-toast sentinel-toast--${r}`,children:[e.jsx("div",{className:"sentinel-toast__icon",children:e.jsx("i",{className:pe[r].icon})}),e.jsxs("div",{className:"sentinel-toast__body",children:[e.jsx("div",{className:"sentinel-toast__title",children:pe[r].title}),e.jsx("div",{className:"sentinel-toast__sub",children:pe[r].sub})]})]},r))}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",flexWrap:"wrap"},children:[e.jsxs(d,{variant:"primary",size:"sm",onClick:()=>n("success"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast สำเร็จ"]}),e.jsxs(d,{variant:"edit",size:"sm",onClick:()=>n("edit"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast แก้ไข"]}),e.jsxs(d,{variant:"danger",size:"sm",onClick:()=>n("error"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast ผิดพลาด"]}),e.jsxs(d,{variant:"edit-outline",size:"sm",onClick:()=>n("warning"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast แจ้งเตือน"]}),e.jsxs(d,{variant:"soft-danger",size:"sm",onClick:()=>n("cancel"),children:[e.jsx("i",{className:"ri-notification-3-line"})," Toast ยกเลิก"]})]}),i.length>0&&e.jsx("div",{style:{position:"fixed",bottom:24,right:24,zIndex:9999,display:"flex",flexDirection:"column",gap:12},children:i.map(r=>e.jsxs("div",{className:`sentinel-toast sentinel-toast--${r.variant}`,style:{cursor:"pointer"},onClick:()=>l(r.id),role:"alert",children:[e.jsx("div",{className:"sentinel-toast__icon",children:e.jsx("i",{className:pe[r.variant].icon})}),e.jsxs("div",{className:"sentinel-toast__body",children:[e.jsx("div",{className:"sentinel-toast__title",children:r.title}),e.jsx("div",{className:"sentinel-toast__sub",children:r.sub})]})]},r.id))})]})},Rl=`{/* Tooltip — hover, placement: top / bottom / left / right */}
import Tooltip, { Popover } from '@/components/common/Tooltip';
<Tooltip content="แก้ไขข้อมูล" placement="top">
  <Button variant="edit-outline" size="icon" leftIcon="ri-pencil-line" aria-label="แก้ไข" />
</Tooltip>

{/* Tooltip — theme: dark (default) / light */}
<Tooltip content="ข้อมูลเพิ่มเติม" placement="bottom" theme="light">
  <Button variant="ghost" size="icon" leftIcon="ri-information-line" aria-label="ข้อมูล" />
</Tooltip>

{/* Tooltip — content เป็น JSX ได้ (เช่น แสดง chip หลายอัน) */}
<Tooltip
  content={
    <span style={{ display: 'inline-flex', gap: 4, flexWrap: 'wrap' }}>
      ขนาดที่เหลือ:
      <span className="il-size-chip">S</span>
      <span className="il-size-chip inactive">M</span>
    </span>
  }
  placement="top"
  theme="light"
>
  <span className="il-size-chip il-size-chip-more">+2</span>
</Tooltip>

{/* Popover — click, มี click-outside-to-close ในตัว ไม่ต้องเขียน useState เอง */}
{/* placement: top / bottom (default) / left / right */}
<Popover
  placement="bottom"
  icon="ri-shield-check-line"
  title="ข้อมูลการตรวจสอบ"
  content="ตรวจสอบล่าสุด: 12 พ.ค. 2569"
  footer={<Button variant="primary" size="sm">ดูเพิ่มเติม</Button>}
>
  <Button variant="outline" size="sm" leftIcon="ri-information-line">รายละเอียด</Button>
</Popover>`,ke={width:40,height:40,borderRadius:"var(--radius-sm)",border:"1px solid var(--color-border-default)",background:"var(--color-surface-white)",color:"var(--color-text-muted)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:18,cursor:"default"},G={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},H={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},we=[{id:"1",title:"ความปลอดภัยในการทำงานกับเครื่องจักร",subtitle:"Safety Talk · อบรมความปลอดภัย",icon:"ri-shield-check-line",isActive:!0,date:"2026-06-15",location:"ทั่วประเทศ",person:"MooTod FoyThong",description:"ความปลอดภัยในการทำงานกับเครื่องจักร",fileUrl:null},{id:"2",title:"การป้องกันอัคคีภัยในโรงงาน",subtitle:"Safety Talk · อบรมความปลอดภัย",icon:"ri-fire-line",isActive:!1,date:"2026-06-20",location:"กรุงเทพมหานคร",person:"สมใจ กาญจน์ดี",description:"การฝึกซ้อมดับเพลิงและการใช้ถังดับเพลิงอย่างถูกต้อง",fileUrl:"https://example.com/fire-safety.pdf",fileName:"fire-safety-guide.pdf"}],oi=i=>{const s=i.getBoundingClientRect(),l=320,n=10,r=s.right+n+l>window.innerWidth?s.left-l-n:s.right+n,t=Math.max(8,s.top);return{x:r+window.scrollX,y:t+window.scrollY}},Al=()=>{const[i,s]=o.useState(ei),l=o.useRef(null),n=o.useCallback((t,a)=>{t.stopPropagation();const{x:c,y:v}=oi(t.currentTarget);s({visible:!0,mode:"single",x:c,y:v,item:a,items:[],listIcon:"",listTitle:"",listTag:""})},[]),r=o.useCallback(t=>{t.stopPropagation();const{x:a,y:c}=oi(t.currentTarget);s({visible:!0,mode:"list",x:a,y:c,item:null,items:we,listIcon:"ri-calendar-2-line",listTitle:Gi("2026-06-15"),listTag:`${we.length} บทความในวันนี้`})},[]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("div",{style:G,children:"DetailPopover — Single Mode (คลิกเพื่อดู)"}),e.jsx("div",{style:{...H,display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"center"},children:we.map(t=>e.jsx(d,{variant:"outline",size:"sm",leftIcon:"ri-eye-line",onClick:a=>n(a,t),children:t.title.length>20?`${t.title.slice(0,20)}…`:t.title},t.id))})]}),e.jsxs("div",{children:[e.jsx("div",{style:G,children:"DetailPopover — List Mode (คลิกเพื่อดู)"}),e.jsx("div",{style:{...H,display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"center"},children:e.jsxs(d,{variant:"info",size:"sm",leftIcon:"ri-list-check",onClick:r,children:["ดูรายการทั้งหมด (",we.length," บทความ)"]})})]}),e.jsx(Hi,{ref:l,popup:i,onClose:()=>s(ei),onSelectItem:t=>s(a=>({...a,mode:"single",item:t,items:[]})),footer:t=>t.isActive?e.jsx(d,{variant:"edit-outline",size:"sm",leftIcon:"ri-pencil-line",children:"แก้ไข"}):null,statusLabels:{active:"ใช้งาน",inactive:"ปิดใช้งาน"}})]})},Ll=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:G,children:"Tooltip — 4 ทิศทาง (hover เพื่อดู)"}),e.jsx("div",{style:{...H,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:[{dir:"top",icon:"ri-arrow-up-line",label:"แสดงด้านบน"},{dir:"bottom",icon:"ri-arrow-down-line",label:"แสดงด้านล่าง"},{dir:"left",icon:"ri-arrow-left-line",label:"แสดงซ้าย"},{dir:"right",icon:"ri-arrow-right-line",label:"แสดงขวา"}].map(({dir:i,icon:s,label:l})=>e.jsx(he,{content:l,placement:i,children:e.jsx("button",{style:ke,children:e.jsx("i",{className:s})})},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:G,children:"Tooltip — Hover ใช้งานจริง"}),e.jsx("div",{style:{...H,display:"flex",gap:"var(--space-4)",flexWrap:"wrap"},children:[{icon:"ri-edit-line",tip:"แก้ไขข้อมูล"},{icon:"ri-delete-bin-line",tip:"ลบรายการ"},{icon:"ri-eye-line",tip:"ดูรายละเอียด"},{icon:"ri-download-line",tip:"ดาวน์โหลด"},{icon:"ri-share-line",tip:"แชร์"}].map(({icon:i,tip:s})=>e.jsx(he,{content:s,placement:"top",children:e.jsx("button",{style:ke,children:e.jsx("i",{className:i})})},i))})]}),e.jsxs("div",{children:[e.jsx("div",{style:G,children:"Tooltip — Theme (dark / light)"}),e.jsxs("div",{style:{...H,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:[e.jsx(he,{content:"dark (default)",placement:"top",theme:"dark",children:e.jsx("button",{style:ke,children:e.jsx("i",{className:"ri-moon-line"})})}),e.jsx(he,{content:"light theme",placement:"top",theme:"light",children:e.jsx("button",{style:ke,children:e.jsx("i",{className:"ri-sun-line"})})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:G,children:"Popover — Click (ทั่วไป)"}),e.jsx("div",{style:{...H,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:e.jsx(Ye,{icon:"ri-shield-check-line",title:"ข้อมูลการตรวจสอบ",content:e.jsxs("div",{style:{fontSize:13,color:"var(--color-text-body)",lineHeight:1.6},children:["ตรวจสอบล่าสุด: ",e.jsx("strong",{children:"12 พ.ค. 2569"}),e.jsx("br",{}),"โดย: สมใจ กาญจน์ดี",e.jsx("br",{}),"สถานะ: พร้อมใช้งาน"]}),children:e.jsx(d,{variant:"outline",size:"sm",leftIcon:"ri-information-line",children:"รายละเอียด"})})}),e.jsx("div",{style:G,children:"Popover — Click (4 ทิศทาง)"}),e.jsx("div",{style:{...H,display:"flex",gap:"var(--space-12)",flexWrap:"wrap",alignItems:"center",padding:"var(--space-8) var(--space-6)"},children:[{placement:"top",label:"แสดงด้านบน"},{placement:"bottom",label:"แสดงด้านล่าง"},{placement:"left",label:"แสดงซ้าย"},{placement:"right",label:"แสดงขวา"}].map(({placement:i,label:s})=>e.jsx(Ye,{placement:i,icon:"ri-shield-check-line",title:"ข้อมูลการตรวจสอบ",content:e.jsxs("div",{style:{fontSize:13,color:"var(--color-text-body)",lineHeight:1.6},children:["ตรวจสอบล่าสุด: ",e.jsx("strong",{children:"12 พ.ค. 2569"}),e.jsx("br",{}),"โดย: สมใจ กาญจน์ดี",e.jsx("br",{}),"สถานะ: พร้อมใช้งาน"]}),footer:e.jsx(d,{variant:"primary",size:"sm",children:"ดูเพิ่มเติม"}),children:e.jsx(d,{variant:"outline",size:"sm",leftIcon:"ri-information-line",children:s})},i))})]}),e.jsx(Al,{})]}),Wl=`import Avatar, { AvatarGroup, UserChip } from '@/components/common/Avatar';

// ── Avatar Props ────────────────────────────────────────────────
// initials : 'สก' | 'AD' | 'WH' ...
// role     : 'safety'(เขียว) | 'admin'(อำพัน) | 'audit'(เทอล์) | 'hq'(น้ำเงิน) | 'lead'(ม่วง) | 'warehouse'(น้ำตาล)
// size     : 'xs'(24) | 'sm'(32) | 'md'(40) | 'lg'(56) | 'xl'(72)
// status   : 'online' | 'away' | 'offline'
// src      : URL รูป (optional)

{/* Sizes */}
<Avatar initials="สก" role="safety" size="xs" />
<Avatar initials="สก" role="safety" size="sm" />
<Avatar initials="สก" role="safety" size="md" />
<Avatar initials="สก" role="safety" size="lg" />
<Avatar initials="สก" role="safety" size="xl" />

{/* Role colors */}
<Avatar initials="สก" role="safety"    size="md" />
<Avatar initials="AD" role="admin"     size="md" />
<Avatar initials="AU" role="audit"     size="md" />
<Avatar initials="HQ" role="hq"        size="md" />
<Avatar initials="LD" role="lead"      size="md" />
<Avatar initials="WH" role="warehouse" size="md" />

{/* Status dot */}
<Avatar initials="สก" role="safety" size="lg" status="online"  />
<Avatar initials="AD" role="admin"  size="lg" status="away"    />
<Avatar initials="HQ" role="hq"     size="lg" status="offline" />

{/* Avatar Group — max=4 แสดง +N อัตโนมัติ */}
<AvatarGroup max={4}>
  <Avatar initials="สก" role="safety"    size="md" />
  <Avatar initials="AD" role="admin"     size="md" />
  <Avatar initials="WH" role="warehouse" size="md" />
  <Avatar initials="HQ" role="hq"        size="md" />
  <Avatar initials="LD" role="lead"      size="md" />
</AvatarGroup>

{/* UserChip variants */}
<UserChip initials="สก" role="safety" size="md" name="สมใจ กาญจน์ดี"  roleLabel="Safety Officer" />
<UserChip initials="WH" role="warehouse" size="md" name="วิทยา คลังดี" roleLabel="Warehouse" variant="card" />
<UserChip initials="AD" role="admin" name="ผู้ดูแลระบบ" variant="tag" onRemove={() => {}} />`,ee=[{id:"u1",initials:"สก",role:"safety",roleLabel:"Safety Officer",name:"สมใจ กาญจน์ดี",status:"online"},{id:"u2",initials:"AD",role:"admin",roleLabel:"Admin",name:"ผู้ดูแลระบบ",status:"away"},{id:"u3",initials:"AU",role:"audit",roleLabel:"Auditor",name:"ตรวจสอบ ระบบดี",status:"offline"},{id:"u4",initials:"HQ",role:"hq",roleLabel:"Headquarters",name:"สำนักงานใหญ่"},{id:"u5",initials:"LD",role:"lead",roleLabel:"Team Lead",name:"หัวหน้าทีม งานดี"}],ie={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},w={fontSize:10,color:"var(--color-text-subtle)",marginTop:4,fontFamily:"var(--font-body)",textAlign:"center"},di={online:"ออนไลน์",away:"ไม่อยู่",offline:"ออฟไลน์"},ci=[{id:"wh1",initials:"WH",name:"วิทยา คลังดี",roleLabel:"Warehouse",status:"online"},{id:"wh2",initials:"วค",name:"วราวุธ คำมี",roleLabel:"Warehouse",status:"away"},{id:"wh3",initials:"สค",name:"สมหมาย คลัง",roleLabel:"Warehouse",status:"offline"}],Ol=()=>{const[i,s]=o.useState(["สมใจ กาญจน์ดี","วิทยา คลังดี","ผู้ดูแลระบบ"]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Sizes — xs / sm / md / lg / xl"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",alignItems:"flex-end",flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(l=>e.jsxs("div",{children:[e.jsx(F,{initials:"สก",role:"safety",size:l}),e.jsx("div",{style:w,children:l})]},l))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Role Colors"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"flex-end"},children:[ee.map(l=>e.jsxs("div",{children:[e.jsx(F,{initials:l.initials,role:l.role,size:"md"}),e.jsx("div",{style:w,children:l.roleLabel})]},l.id)),e.jsxs("div",{children:[e.jsx(F,{initials:"WH",role:"warehouse",size:"md"}),e.jsx("div",{style:w,children:"Warehouse"})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Online Status"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-5)",flexWrap:"wrap",alignItems:"flex-end"},children:ee.filter(l=>l.status).map(l=>e.jsxs("div",{children:[e.jsx(F,{initials:l.initials,role:l.role,size:"lg",status:l.status}),e.jsx("div",{style:w,children:di[l.status]})]},l.id))})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Avatar Group — max=4 → แสดง +N อัตโนมัติ"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-6)",flexWrap:"wrap",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{style:w,children:"max=4"}),e.jsxs(Ze,{max:4,children:[ee.map(l=>e.jsx(F,{initials:l.initials,role:l.role,size:"md",title:l.name},l.id)),e.jsx(F,{initials:"WH",role:"warehouse",size:"md",title:"วิทยา คลังดี"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:w,children:"max=3"}),e.jsxs(Ze,{max:3,children:[ee.map(l=>e.jsx(F,{initials:l.initials,role:l.role,size:"md",title:l.name},l.id)),e.jsx(F,{initials:"WH",role:"warehouse",size:"md",title:"วิทยา คลังดี"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"UserChip — default / card / tag"}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-5)",flexWrap:"wrap",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("div",{style:w,children:"default"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",marginTop:"var(--space-2)"},children:[ee.slice(0,2).map(l=>e.jsx(q,{initials:l.initials,role:l.role,size:"md",name:l.name,roleLabel:l.roleLabel},l.id)),e.jsx(q,{initials:"WH",role:"warehouse",size:"md",name:"วิทยา คลังดี",roleLabel:"Warehouse"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:w,children:"card — dropdown trigger"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",marginTop:"var(--space-2)"},children:[ee.slice(0,2).map(l=>e.jsx(q,{initials:l.initials,role:l.role,size:"md",name:l.name,roleLabel:l.roleLabel,variant:"card"},l.id)),e.jsx(q,{initials:"WH",role:"warehouse",size:"md",name:"วิทยา คลังดี",roleLabel:"Warehouse",variant:"card"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:w,children:"tag — กดลบได้"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"var(--space-2)",marginTop:"var(--space-2)",maxWidth:260},children:i.map((l,n)=>e.jsx(q,{initials:l.slice(0,2),role:["safety","warehouse","admin"][n]??"safety",name:l,variant:"tag",onRemove:()=>s(r=>r.filter(t=>t!==l))},l))})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:ie,children:"Warehouse Role — ตัวอย่าง use case"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-4)",flexWrap:"wrap",alignItems:"flex-end"},children:ci.map(l=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(F,{initials:l.initials,role:"warehouse",size:"lg",status:l.status}),e.jsx("div",{style:{...w,marginTop:6,fontSize:11,color:"var(--color-text-body)"},children:l.name}),e.jsx("div",{style:w,children:di[l.status]})]},l.id))}),e.jsx("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-4)",flexWrap:"wrap"},children:ci.map(l=>e.jsx(q,{initials:l.initials,role:"warehouse",size:"md",name:l.name,roleLabel:l.roleLabel,variant:"card"},l.id))})]})]})},Ml=`{/* Progress bar */}
<div className="sentinel-progress">
  <div className="sentinel-progress__bar" style={{ width: \`\${progress}%\` }}
    role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100} />
</div>

{/* Variants */}
<div className="sentinel-progress">
  <div className="sentinel-progress__bar sentinel-progress__bar--success" style={{ width: '100%' }} />
</div>
<div className="sentinel-progress">
  <div className="sentinel-progress__bar sentinel-progress__bar--warning" style={{ width: '65%' }} />
</div>
<div className="sentinel-progress">
  <div className="sentinel-progress__bar sentinel-progress__bar--error" style={{ width: '30%' }} />
</div>

{/* Stepper */}
<div className="sentinel-stepper">
  <div className="sentinel-stepper__item is-done">
    <div className="sentinel-stepper__node"><i className="ri-check-line" /></div>
    <div className="sentinel-stepper__label">สร้างคำขอ</div>
    <div className="sentinel-stepper__line" />
  </div>
  <div className="sentinel-stepper__item is-active">
    <div className="sentinel-stepper__node"><span>3</span></div>
    <div className="sentinel-stepper__label">รออนุมัติ</div>
    <div className="sentinel-stepper__line" />
  </div>
  <div className="sentinel-stepper__item">
    <div className="sentinel-stepper__node"><span>4</span></div>
    <div className="sentinel-stepper__label">ดำเนินการแล้ว</div>
  </div>
</div>`,pi=[{id:"1",label:"สร้างคำขอ",done:!0,active:!1},{id:"2",label:"ตรวจสอบเอกสาร",done:!0,active:!1},{id:"3",label:"รออนุมัติ",done:!1,active:!0},{id:"4",label:"ดำเนินการแล้ว",done:!1,active:!1}],Ul=()=>{const[i,s]=o.useState(pi),[l,n]=o.useState(45),r=()=>{s(a=>{const c=a.findIndex(v=>v.active);return c<0||c>=a.length-1?a:a.map((v,x)=>({...v,done:x<=c,active:x===c+1}))}),n(a=>Math.min(a+25,100))},t=()=>{s(pi),n(45)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Horizontal Stepper"}),e.jsx("div",{className:"sentinel-stepper",children:i.map((a,c)=>e.jsxs("div",{className:["sentinel-stepper__item",a.done?"is-done":"",a.active?"is-active":""].join(" ").trim(),children:[e.jsx("div",{className:"sentinel-stepper__node",children:a.done?e.jsx("i",{className:"ri-check-line"}):e.jsx("span",{children:c+1})}),e.jsx("div",{className:"sentinel-stepper__label",children:a.label}),c<i.length-1&&e.jsx("div",{className:"sentinel-stepper__line"})]},a.id))}),e.jsxs("div",{style:{display:"flex",gap:"var(--space-3)",marginTop:"var(--space-4)"},children:[e.jsxs("button",{className:"sentinel-btn sentinel-btn--primary sentinel-btn--sm",onClick:r,children:[e.jsx("i",{className:"ri-arrow-right-line"})," ขั้นถัดไป"]}),e.jsxs("button",{className:"sentinel-btn sentinel-btn--outline sentinel-btn--sm",onClick:t,children:[e.jsx("i",{className:"ri-refresh-line"})," รีเซ็ต"]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Progress Bar"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-3)",maxWidth:480},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,fontFamily:"var(--font-body)",fontWeight:600,color:"var(--color-text-muted)",marginBottom:6},children:[e.jsx("span",{children:"ความคืบหน้า"}),e.jsxs("span",{children:[l,"%"]})]}),e.jsx("div",{className:"sentinel-progress",children:e.jsx("div",{className:"sentinel-progress__bar",style:{width:`${l}%`},role:"progressbar","aria-valuenow":l,"aria-valuemin":0,"aria-valuemax":100})})]}),[{label:"สำเร็จ 100%",value:100,mod:"success"},{label:"เตือน 65%",value:65,mod:"warning"},{label:"ผิดพลาด 30%",value:30,mod:"error"}].map(({label:a,value:c,mod:v})=>e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:12,fontFamily:"var(--font-body)",fontWeight:600,color:"var(--color-text-muted)",marginBottom:6},children:[e.jsx("span",{children:a}),e.jsxs("span",{children:[c,"%"]})]}),e.jsx("div",{className:"sentinel-progress",children:e.jsx("div",{className:`sentinel-progress__bar sentinel-progress__bar--${v}`,style:{width:`${c}%`}})})]},v))]})]})]})},Gl=`import Spinner from '@/components/common/Spinner';
import Skeleton from '@/components/common/Skeleton';

{/* ── Spinners ── */}
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner variant="error" />

{/* ── Skeleton ── */}
<div className="sk-row">
  <Skeleton height={40} width={40} circle />
  <div className="sk-group" style={{ flex: 1 }}>
    <Skeleton height={14} width="60%" />
    <Skeleton height={11} width="40%" />
  </div>
</div>
<Skeleton height={12} style={{ marginBottom: 8 }} />
<Skeleton height={12} width="80%" style={{ marginBottom: 8 }} />
<Skeleton height={12} width="55%" />`,Hl={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-card)",padding:"var(--space-6)"},Vl=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-7)"},children:[e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Loading Spinners"}),e.jsx("div",{style:{display:"flex",gap:"var(--space-6)",alignItems:"center",flexWrap:"wrap"},children:[{size:"sm",variant:"default",label:"sm"},{size:"md",variant:"default",label:"md"},{size:"lg",variant:"default",label:"lg"},{size:"md",variant:"error",label:"error"}].map(({size:i,variant:s,label:l})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(Ki,{size:i,variant:s}),e.jsx("div",{style:{fontSize:10,color:"var(--color-text-subtle)",marginTop:6,fontFamily:"var(--font-body)"},children:l})]},l))})]}),e.jsxs("div",{children:[e.jsx("div",{className:"ex-label",children:"Skeleton Shimmer"}),e.jsxs("div",{style:{...Hl,maxWidth:360},children:[e.jsxs("div",{className:"sk-row",style:{marginBottom:"var(--space-4)"},children:[e.jsx(Y,{height:40,width:40,circle:!0}),e.jsxs("div",{className:"sk-group",style:{flex:1},children:[e.jsx(Y,{height:14,width:"60%"}),e.jsx(Y,{height:11,width:"40%"})]})]}),e.jsx(Y,{height:12,style:{marginBottom:8}}),e.jsx(Y,{height:12,width:"80%",style:{marginBottom:8}}),e.jsx(Y,{height:12,width:"55%"})]})]})]}),gi=`import {
  EventsStateView,
  EventsStatePage,
  EventsStateProvider,
  useEventsState,
} from '@/components/common/EventsState';

{/* ── Inline: ใส่ใน tbody / panel ── */}

{/* 404 — ไม่พบรายการ */}
<EventsStateView
  status={404}
  entityLabel="ถังดับเพลิง"
  entityId="FE-1021"
  onBack={() => navigate(-1)}
/>

{/* 500 — เซิร์ฟเวอร์ขัดข้อง */}
<EventsStateView status={500} onRetry={fetchData} />

{/* 0 + searchTerm — ค้นหาแล้วไม่เจอ */}
<EventsStateView
  status={0}
  searchTerm='"คลังภาค5"'
  onClear={clearFilter}
/>

{/* 0 — filter ไม่มีผล (ไม่มี searchTerm) */}
<EventsStateView status={0} onClear={clearFilter} />

{/* 409 — ข้อมูลซ้ำ */}
<EventsStateView
  status={409}
  entityLabel="รหัสคลังสินค้า"
  onBack={() => setModalOpen(false)}
/>

{/* ── Full-page (mount ใน route ที่ไม่มี layout) ── */}
<EventsStatePage
  status={403}
  onGoHome={() => navigate('/')}
  onContactAdmin={() => window.open('mailto:admin@example.com')}
/>
<EventsStatePage
  status={401}
  onGoHome={() => navigate('/login')}
/>

{/* ── Full-page ภายใน layout หลัก (มี sidebar / topbar / footer) ── */}
{/* inLayout → component ห่อ page-content + flex center ให้เอง */}
{/* ไม่ต้องเขียน wrapper div เพิ่ม */}
<EventsStatePage
  status={403}
  inLayout
  onGoHome={() => navigate('/')}
  onContactAdmin={() => window.open('mailto:admin@example.com')}
/>`,$l=`// App.tsx — mount ครั้งเดียว เหมือน ToastProvider
import { EventsStateProvider } from '@/components/common/EventsState';

<EventsStateProvider>
  <App />
</EventsStateProvider>

// ── ใน component ── ควบคุมผ่าน context
import { useEventsState } from '@/components/common/EventsState';

const { showError, clearError } = useEventsState();

// แสดง error
showError({ status: 404, entityLabel: 'ถังดับเพลิง', onBack: () => navigate(-1) });

// ล้าง
clearError();`,P={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},Ne={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"var(--space-4)"},xi={background:"#1e2937",color:"#e2e8f0",borderRadius:10,padding:"16px 20px",fontSize:12,fontFamily:"'Courier New', monospace",lineHeight:1.7,overflowX:"auto",whiteSpace:"pre"},N=({children:i})=>e.jsx("div",{style:{border:"1px solid #e2e8f0",borderRadius:12,overflow:"hidden",background:"#fff",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"},children:i}),vi=({children:i})=>e.jsx("div",{style:{border:"1px solid #e2e8f0",borderRadius:12,overflow:"hidden",background:"#f2efe9",boxShadow:"0 1px 3px rgba(0,0,0,0.04)",padding:"24px 16px"},children:i}),Kl=[{key:"inline",label:"Inline States"},{key:"fullpage",label:"Full-page 403 / 401"},{key:"provider",label:"Context (Provider)"}],ql=()=>{const[i,s]=o.useState("inline"),[l,n]=o.useState(!1),r=()=>{};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsx("div",{style:{display:"flex",gap:4,background:"#f1f5f9",borderRadius:10,padding:4,width:"fit-content"},children:Kl.map(t=>e.jsx("button",{type:"button",onClick:()=>s(t.key),style:{padding:"6px 16px",borderRadius:7,border:"none",cursor:"pointer",fontFamily:"var(--font-body)",fontSize:13,fontWeight:i===t.key?700:500,background:i===t.key?"#fff":"transparent",color:i===t.key?"#1e2937":"#64748b",boxShadow:i===t.key?"0 1px 3px rgba(0,0,0,0.08)":"none",transition:"all 0.15s"},children:t.label},t.key))}),i==="inline"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:P,children:"Not Found · 404"}),e.jsxs("div",{style:Ne,children:[e.jsx(N,{children:e.jsx(k,{status:404,entityLabel:"ถังดับเพลิง",entityId:"FE-1021",onBack:r})}),e.jsx(N,{children:e.jsx(k,{status:404,entityLabel:"สถานที่",entityId:"LOC-0042",onBack:r,onAdd:r})}),e.jsx(N,{children:e.jsx(k,{status:404,entityLabel:"ผู้ใช้งาน",entityId:"USR-0099",onBack:r})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:P,children:"Empty · ตัวกรองไม่มีผล (status = 0)"}),e.jsxs("div",{style:Ne,children:[e.jsx(N,{children:e.jsx(k,{status:0,searchTerm:'"คลังภาค5"',onClear:r})}),e.jsx(N,{children:e.jsx(k,{status:0,onClear:r})}),e.jsx(N,{children:e.jsx(k,{status:0,entityLabel:"ถังดับเพลิง",onAdd:r,message:"เริ่มต้นด้วยการเพิ่มถังดับเพลิงรายการแรกเข้าสู่ระบบ"})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:P,children:"Server & Network Errors · 500 / 429 / 400"}),e.jsxs("div",{style:Ne,children:[e.jsx(N,{children:e.jsx(k,{status:500,onRetry:r})}),e.jsx(N,{children:e.jsx(k,{status:429,onRetry:r})}),e.jsx(N,{children:e.jsx(k,{status:400,onRetry:r})})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:P,children:"Conflict & Validation · 409 / 422"}),e.jsxs("div",{style:Ne,children:[e.jsx(N,{children:e.jsx(k,{status:409,entityLabel:"รหัสคลังสินค้า",onBack:r})}),e.jsx(N,{children:e.jsx(k,{status:422,onBack:r})})]})]}),e.jsxs("div",{children:[e.jsxs("button",{type:"button",onClick:()=>n(t=>!t),style:{display:"inline-flex",alignItems:"center",gap:6,padding:"6px 14px",borderRadius:7,border:"1.3px solid #e2e8f0",background:l?"#1e2937":"#fff",color:l?"#e2e8f0":"#64748b",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"var(--font-body)",transition:"all 0.15s"},children:[e.jsx("i",{className:l?"ri-eye-off-line":"ri-code-line"}),l?"ซ่อนโค้ด":"ดูโค้ด"]}),l&&e.jsx("div",{style:{marginTop:12},children:e.jsx("pre",{style:xi,children:gi})})]})]}),i==="fullpage"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:P,children:"403 Forbidden · ไม่มีสิทธิ์เข้าถึง"}),e.jsx(vi,{children:e.jsx(Qe,{status:403,onGoHome:r,onContactAdmin:r})})]}),e.jsxs("div",{children:[e.jsx("div",{style:P,children:"401 Unauthorized · กรุณาเข้าสู่ระบบ"}),e.jsx(vi,{children:e.jsx(Qe,{status:401,onGoHome:r})})]}),e.jsxs("div",{style:{background:"#edf6f2",border:"1px solid #c8ddd2",borderRadius:10,padding:"14px 18px",fontSize:12,color:"#2d6e53",lineHeight:1.7},children:[e.jsx("strong",{children:"วิธีใช้งาน (ไม่มี layout):"})," mount <EventsStatePage> ในระดับ route guard เมื่อ API คืน 401/403 ตรวจสอบผ่าน axios interceptor แล้ว redirect หรือ render component นี้แทนหน้าเนื้อหา",e.jsx("br",{}),e.jsx("br",{}),e.jsx("strong",{children:"วิธีใช้งาน (มี layout):"})," ถ้าหน้านั้นอยู่ใน layout หลักที่มี sidebar / topbar / footer ให้เพิ่ม prop ",e.jsx("code",{style:{fontFamily:"monospace",background:"#d1ead9",padding:"1px 5px",borderRadius:4},children:"inLayout"})," — component จะห่อ ",e.jsx("code",{style:{fontFamily:"monospace",background:"#d1ead9",padding:"1px 5px",borderRadius:4},children:"page-content"})," + flex center ให้เอง โดยไม่ต้องเขียน wrapper div เพิ่ม"]})]}),i==="provider"&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-6)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:P,children:"Context Pattern — EventsStateProvider + useEventsState"}),e.jsx("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,padding:"20px 24px",display:"flex",flexDirection:"column",gap:16},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:12},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Export","ชนิด","หน้าที่"].map(t=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"1px solid #e2e8f0",fontWeight:700,color:"#1e2937"},children:t},t))})}),e.jsx("tbody",{children:[["EventsStateProvider","Context Provider","Mount ครั้งเดียวที่ App level"],["useEventsState()","Hook","ดึง showError / clearError / state"],["EventsStateView","Component","Inline state box (ใน tbody / panel)"],["EventsStatePage","Component","Full-page 403 / 401"],["EventsStateOptions","TypeScript interface","Props + showError argument"]].map(([t,a,c])=>e.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"'Courier New', monospace",color:"#2d6e53",fontWeight:700},children:t}),e.jsx("td",{style:{padding:"8px 12px",color:"#64748b"},children:a}),e.jsx("td",{style:{padding:"8px 12px",color:"#414940"},children:c})]},t))})]})})]}),e.jsxs("div",{children:[e.jsx("div",{style:P,children:"Code"}),e.jsx("pre",{style:xi,children:$l})]}),e.jsxs("div",{children:[e.jsx("div",{style:P,children:"EventsStateOptions — props"}),e.jsx("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:12,overflow:"hidden"},children:e.jsxs("table",{style:{borderCollapse:"collapse",width:"100%",fontSize:12},children:[e.jsx("thead",{children:e.jsx("tr",{style:{background:"#f8fafc"},children:["Prop","Type","Required","คำอธิบาย"].map(t=>e.jsx("th",{style:{padding:"8px 12px",textAlign:"left",borderBottom:"1px solid #e2e8f0",fontWeight:700,color:"#1e2937"},children:t},t))})}),e.jsx("tbody",{children:[["status","HttpStatus","✓","0 | 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500"],["entityLabel","string","–",'ชื่อ entity ใน title เช่น "ถังดับเพลิง"'],["entityId","string","–",'ID ที่แสดงใน subtitle เช่น "FE-1021"'],["searchTerm","string","–","คำค้น — trigger empty-search state"],["onRetry","() => void","–",'callback ปุ่ม "ลองใหม่"'],["onClear","() => void","–",'callback ปุ่ม "ล้างตัวกรอง"'],["onBack","() => void","–",'callback ปุ่ม "ย้อนกลับ"'],["onAdd","() => void","–",'callback ปุ่ม "เพิ่มข้อมูล" / "ดูรายการทั้งหมด"'],["message","string","–","override subtitle text"],["inLayout","boolean","–","ใช้เมื่อ render ใน layout หลัก (sidebar/topbar/footer) — ห่อ page-content + flex center ให้อัตโนมัติ (เฉพาะ EventsStatePage)"]].map(([t,a,c,v])=>e.jsxs("tr",{style:{borderBottom:"1px solid #f1f5f9"},children:[e.jsx("td",{style:{padding:"8px 12px",fontFamily:"'Courier New', monospace",color:"#2d6e53",fontWeight:700},children:t}),e.jsx("td",{style:{padding:"8px 12px",fontFamily:"'Courier New', monospace",color:"#64748b"},children:a}),e.jsx("td",{style:{padding:"8px 12px",color:c==="✓"?"#ef4444":"#94a3b8",fontWeight:700,textAlign:"center"},children:c}),e.jsx("td",{style:{padding:"8px 12px",color:"#414940"},children:v})]},t))})]})})]})]})]})},Xl=`import { useState } from 'react';
import FileUploadDropzone, {
  PdfUploadField,
  type UploadedFile,
  newUploadId,
  formatBytes,
} from '@/components/common/FileUploadDropzone';

// ── Helper ────────────────────────────────────────────────────
const toUploadedFiles = (files: File[]): UploadedFile[] =>
  files.map((f) => ({
    id:       newUploadId(),
    file:     f,
    name:     f.name,
    size:     formatBytes(f.size),
    status:   'pending',
    progress: 0,
    iconType: f.name.endsWith('.pdf') ? 'pdf'
            : f.type.startsWith('image/') ? 'img'
            : 'default',
  }));

// ── 1. Add — 1 ไฟล์ (PdfUploadField) ─────────────────────────
const [selectedFile, setSelectedFile] = useState<File | null>(null);

<PdfUploadField
  selectedFile={selectedFile}
  onFileSelect={setSelectedFile}
/>

// ── 2. Edit — มี PDF เดิม (PdfUploadField) ───────────────────
const [selectedFile, setSelectedFile] = useState<File | null>(null);
const [keepPdf, setKeepPdf]           = useState(true);

<PdfUploadField
  existingPdfUrl="https://example.com/sample.pdf"
  existingPdfName="safety-talk-2024.pdf"
  selectedFile={selectedFile}
  keepPdf={keepPdf}
  onFileSelect={setSelectedFile}
  onKeepPdfChange={setKeepPdf}
/>

// ── 3. Add — หลายไฟล์ สูงสุด N (FileUploadDropzone) ─────────
const [files, setFiles] = useState<UploadedFile[]>([]);

<FileUploadDropzone
  accept={{ 'application/pdf': ['.pdf'], 'image/*': ['.jpg', '.jpeg', '.png'] }}
  maxFiles={3}
  files={files}
  onFilesAdded={(newFiles) =>
    setFiles((prev) => [...prev, ...toUploadedFiles(newFiles)])
  }
  onFileRemoved={(id) =>
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }
/>

// ── 4. Edit — หลายไฟล์ มีของเดิม (FileUploadDropzone) ───────
// initialFiles = UploadedFile[] ที่แปลงมาจาก API (status: 'done')
// ใส่ url เพื่อให้แสดงลิงก์ "คลิกเพื่อดูรายละเอียด" ใต้ชื่อไฟล์
const [files, setFiles] = useState<UploadedFile[]>(initialFiles);
// ตัวอย่าง initialFiles:
// [{ id: '1', name: 'report.pdf', size: '1.2 MB', status: 'done',
//    progress: 100, iconType: 'pdf', url: 'https://...', file: new File([],'') }]

<FileUploadDropzone
  accept={{ 'application/pdf': ['.pdf'] }}
  maxFiles={3}
  files={files}
  onFilesAdded={(newFiles) =>
    setFiles((prev) => [...prev, ...toUploadedFiles(newFiles)])
  }
  onFileRemoved={(id) =>
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }
/>
`,Te={fontFamily:"var(--font-body)",fontSize:10,fontWeight:800,letterSpacing:".14em",textTransform:"uppercase",color:"var(--color-text-subtle)",marginBottom:"var(--space-3)"},ze={background:"var(--color-surface-white)",border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-md)",padding:"var(--space-5)",boxShadow:"var(--shadow-card)"},fi=i=>i.map(s=>({id:$i(),file:s,name:s.name,size:Vi(s.size),status:"pending",progress:0,iconType:s.name.endsWith(".pdf")?"pdf":s.type.startsWith("image/")?"img":"default"})),Yl=()=>{const[i,s]=o.useState(null);return e.jsx(hi,{selectedFile:i,onFileSelect:s})},Zl=()=>{const[i,s]=o.useState(null),[l,n]=o.useState(!0);return e.jsx(hi,{existingPdfUrl:"https://example.com/sample.pdf",existingPdfName:"safety-talk-2024.pdf",selectedFile:i,keepPdf:l,onFileSelect:s,onKeepPdfChange:n})},Ql=()=>{const[i,s]=o.useState([]);return e.jsx(ui,{accept:{"application/pdf":[".pdf"],"image/*":[".jpg",".jpeg",".png"]},maxFiles:3,files:i,onFilesAdded:l=>s(n=>[...n,...fi(l)]),onFileRemoved:l=>s(n=>n.filter(r=>r.id!==l))})},Jl=()=>{const[i,s]=o.useState([{id:"existing-1",file:new File([],"report-jan.pdf"),name:"report-jan.pdf",size:"1.2 MB",status:"done",progress:100,iconType:"pdf",url:"https://example.com/report-jan.pdf"},{id:"existing-2",file:new File([],"report-feb.pdf"),name:"report-feb.pdf",size:"980 KB",status:"done",progress:100,iconType:"pdf",url:"https://example.com/report-feb.pdf"}]);return e.jsx(ui,{accept:{"application/pdf":[".pdf"]},maxFiles:3,files:i,onFilesAdded:l=>s(n=>[...n,...fi(l)]),onFileRemoved:l=>s(n=>n.filter(r=>r.id!==l))})},es=()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"var(--space-8)"},children:[e.jsxs("div",{children:[e.jsx("div",{style:Te,children:"Add File Upload"}),e.jsx("div",{style:ze,children:e.jsx(Yl,{})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Te,children:"Edit File Upload"}),e.jsx("div",{style:ze,children:e.jsx(Zl,{})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Te,children:"Add File Upload multiple"}),e.jsx("div",{style:ze,children:e.jsx(Ql,{})})]}),e.jsxs("div",{children:[e.jsx("div",{style:Te,children:"Edit File Upload multiple"}),e.jsx("div",{style:ze,children:e.jsx(Jl,{})})]})]}),is=`
  .ex-label {
    font-family: var(--font-body);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--color-text-subtle);
    margin-bottom: var(--space-3);
    display: flex;
    align-items: center;
    gap: var(--space-2);
  }
  .ex-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--color-border-default);
  }
`,ls=[{title:"1. Buttons — ปุ่มทุก variant",code:Ji,node:e.jsx(el,{})},{title:"2. Badges — ป้ายสถานะ",code:il,node:e.jsx(ll,{})},{title:"3. Summary Cards — การ์ดสรุปตัวเลข",code:sl,node:e.jsx(nl,{})},{title:"4. Data Table — ตารางข้อมูล + pagination",code:rl,node:e.jsx(dl,{})},{title:"5. Tabs — Underline / Segmented / Pill",code:cl,node:e.jsx(hl,{})},{title:"6. Form Inputs — ฟอร์มกรอกข้อมูล",code:ul,node:e.jsx(bl,{})},{title:"7. Radio & Checkbox",code:yl,node:e.jsx(Sl,{})},{title:"8. Status Toggle — Active / Inactive",code:Cl,node:e.jsx(kl,{})},{title:"9. Switch & Toggle",code:wl,node:e.jsx(zl,{})},{title:"10. Modal — Add / Edit / Confirm / Success",code:Fl,node:e.jsx(Bl,{})},{title:"11. Toast — การแจ้งเตือน",code:Pl,node:e.jsx(Dl,{})},{title:"12. Tooltip & Popover",code:Rl,node:e.jsx(Ll,{})},{title:"13. Avatar & User Chip",code:Wl,node:e.jsx(Ol,{})},{title:"14. Progress & Stepper",code:Ml,node:e.jsx(Ul,{})},{title:"15. Empty State / Spinner / Skeleton",code:Gl,node:e.jsx(Vl,{})},{title:"16. Events State — 404 / 500 / Empty / 403",code:gi,node:e.jsx(ql,{})},{title:"17. File Upload",code:Xl,node:e.jsx(es,{})}],Cs=()=>(o.useEffect(()=>{document.title="Examples — Sentinel DS"},[]),e.jsxs(Oe.Fragment,{children:[e.jsx("style",{children:is}),e.jsx("div",{className:"page-content",children:e.jsxs(Ei,{fluid:!0,children:[e.jsx(Wi,{title:"Examples Components",pageTitle:"Sentinel Design System"}),e.jsx("div",{className:"outer-wrapper",children:ls.map(({title:i,code:s,node:l})=>e.jsx(Di,{className:"mb-3",children:e.jsx(Ri,{lg:12,children:e.jsxs(Ai,{children:[e.jsx(Qi,{title:i,code:s}),e.jsx(Li,{children:l})]})})},i))})]})})]}));export{Cs as default};

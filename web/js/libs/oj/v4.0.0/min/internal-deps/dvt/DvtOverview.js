/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var ga;function ka(a,F){0==a.indexOf("dvt.")&&(a=a.substring(4));var D=a.split("."),E=eval("dvt");D[0]in E||!E.execScript||E.execScript("var "+D[0]);for(var v;D.length&&(v=D.shift());)D.length||void 0===F?E=E[v]?E[v]:E[v]={}:E[v]=F}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function F(a){this.Init(a.a,a.Ef,a);this.Jc=a}function D(){this.Init({alta:D.If})}a.ti={};a.ti.Si=function(){return a.m.eb()};a.f.v(a.ti,a.f);a.ti.Nc=function(a,x,f,c){f=(f-a)*c;a=x-a;return 0==f||0==a?0:f/a};a.ti.Bh=function(a,x,f,c){x=f*(x-a);return 0==x||0==c?a:x/c+a};a.tb=function(a,x,f){this.Init(a,x,f)};a.f.v(a.tb,a.ca);a.tb.kOa=10;a.tb.WMa=40;a.tb.SMa=20;a.tb.I7=20;a.tb.Zza=5;a.tb.bAa=1;a.tb.prototype.Init=function(v,x,f){a.tb.C.Init.call(this,v);this.CJa();this.Sb=x;this.Ba=f;
this.mK=this.GR()?7:6;if(null!=this.Sb||null!=this.Ba)this.u=new F(this),this.u.Lf(this),a.ti.Si()?(this.qb(a.TouchEvent.Nj,this.SS,!1,this),this.qb(a.TouchEvent.gq,this.yya,!1,this),this.qb(a.TouchEvent.Wl,this.N7,!1,this),this.qb(a.MouseEvent.He,this.sM,!1,this)):(this.qb(a.MouseEvent.Hj,this.L7,!1,this),this.qb(a.MouseEvent.Yh,this.K7,!1,this),this.qb(a.MouseEvent.He,this.sM,!1,this),this.qb(a.KeyboardEvent.Dm,this.qM,!1,this),this.qb(a.KeyboardEvent.Rn,this.jfa,!1,this));this.Kma=0};a.tb.prototype.CJa=
function(){this.Ff=new D};a.tb.prototype.Ld=function(a,x,f){null==f&&(f=this.Oa);a=this.Nc(a);var c=this.Nc(x);a<this.mz||c>this.Gba()||(x=Math.max(c-a,this.Hba()),0<x&&0<=a&&c<=f&&(c=this.Ys(),this.Dq()?this.HL(c,f-(a+x)):this.HL(c,a),this.ada(c,x),this.A8()))};a.tb.prototype.FR=function(){return null==this.xCa?!1:-1!=a.Y.$b(this.xCa,"zoom")};a.tb.prototype.Y4a=function(){return"off"!==this.WTa};a.tb.prototype.ia=function(v,x,f){null!=x&&null!=f&&(this.Oa=x,this.bb=f);if(null==v){v=this.Wa;var c=
this.ob,p=this.Ys(),e=this.Pv(p);null!=p&&0!=e&&(this.wFa=a.ti.Bh(v,c,e,this.Oa));this.Hh()}else this.me(v),v=this.fv(this.J),this.lp(v);v=null!=this.Sb||null!=this.Ba;this.KGa(x,f);v&&this.Z0a(x,f);this.i9a(x,f);this.Y5a(x,f);this.a9a(x,f);this.hva(x,f);v&&(this.N0a(x,f),this.GR()&&(this.rU=this.Y0a()),this.g9a());null!=this.YDa&&(this.Kma=Math.max(0,a.ti.Nc(this.Wa,this.ob,this.YDa,this.Ya)));0<this.Kma&&this.J5a(this.Kma)};a.tb.prototype.me=function(a){this.J=this.Ff.no(a)};a.tb.prototype.NIa=
function(){return new a.KM(this)};a.tb.prototype.fv=function(a){return this.NIa(a).parse(a)};a.tb.prototype.lp=function(a){this.Wa=a.start;this.ob=a.end;this.Ya=a.width;this.wFa=a.Rva;this.v_=a.currentTime;this.YDa=a.V4a;this.WTa=a.uGa;this.mz=Math.max(0,a.H5a);this.sU=Math.max(0,a.d7a);isNaN(this.mz)&&(this.mz=0);isNaN(this.sU)&&(this.sU=0);this.XXa=a.orientation;this.uXa=a.oua;null!=a.gHa&&(this.xCa=a.gHa.split(" "));null!=a.Nua&&0<a.Nua&&(this.wEa=a.Nua);this.T2=a.ALa;null!=a.ALa&&(this.S2=this.T2.R8a);
this.lla=a.x1a;this.kUa=E.S1a(this.J);this.Lja=E.R1a(this.J);this.yaa=E.r4a(this.J);this.F_a=E.q4a(this.J);this.N_a=E.z4a(this.J);this.L_a=E.x4a(this.J);this.H_a=E.t4a(this.J);this.J_a=E.v4a(this.J);this.M_a=E.y4a(this.J);this.K_a=E.w4a(this.J);this.G_a=E.s4a(this.J);this.I_a=E.u4a(this.J);this.kXa=E.X2a(this.J);this.p0=E.V2a(this.J);this.pma=E.U2a(this.J);this.RDa=E.Y2a(this.J);this.ODa=E.W2a(this.J);this.ZXa=E.L4(this.J);this.pVa=E.j2a(this.J);this.s_a=E.k4a(this.J);this.q_a=E.j4a(this.J);this.r_a=
E.i4a(this.J);this.lEa=E.g3a(this.J);this.EXa=E.f3a(this.J);this.zFa=E.K3a(this.J);this.KZa=E.J3a(this.J)};a.tb.prototype.Nc=function(v){return Math.max(0,a.ti.Nc(this.Wa,this.ob,v,this.cL()))+this.mz};a.tb.prototype.Bh=function(v){return a.ti.Bh(this.Wa,this.ob,Math.max(0,v-this.mz),this.cL())};a.tb.prototype.cg=function(){return"true"==this.uXa};a.tb.prototype.Dq=function(){return this.cg()&&!this.Ea()};a.tb.prototype.Ea=function(){return"vertical"==this.XXa};a.tb.prototype.rca=function(){return"above"==
this.J.overviewPosition};a.tb.prototype.cL=function(){return this.Ea()?this.bb-this.mz-this.sU:this.Oa-this.mz-this.sU};a.tb.prototype.Gba=function(){return this.Ea()?this.bb-this.sU:this.Oa-this.sU};a.tb.prototype.Hba=function(){return null!=this.Nna?this.Nna:null!=this.wEa?this.Nna=a.ti.Nc(this.Wa,this.ob,this.Wa+this.wEa,this.cL()):a.tb.kOa};a.tb.prototype.sba=function(){return a.ti.Si()?this.ZU()/2:0};a.tb.prototype.ZU=function(){return a.ti.Si()?30:10};a.tb.prototype.HR=function(a){var x=a.getId();
return"lh"==x||"rh"==x||"lhb"==x||"rhb"==x||"grpy"==x||"lbgrh"==x||"rbgrh"==x||null!=a.getParent()&&"grpy"==a.getParent().getId()};a.tb.prototype.vR=function(){if(null==this.T2)return 0;if(null==this.U2){var v=parseInt(this.T2.width,10);this.U2=!isNaN(v)&&v<this.Oa?v:a.tb.WMa}return this.U2};a.tb.prototype.fE=function(){if(null==this.T2)return 0;if(null==this.VFa){var v=parseInt(this.T2.height,10);this.VFa=!isNaN(v)&&v<this.bb?v:a.tb.SMa}return this.VFa};a.tb.prototype.Mba=function(v){return a.ti.Si()&&
null!=v.targetTouches?0<v.targetTouches.length?v.targetTouches[0].pageX:null:v.pageX};a.tb.prototype.Nba=function(v){return a.ti.Si()&&null!=v.targetTouches?0<v.targetTouches.length?v.targetTouches[0].pageY:null:v.pageY};a.tb.prototype.pC=function(){return!1};a.tb.prototype.Ys=function(){return this.dc(1)};a.tb.prototype.yba=function(){return this.pC()?this.dc(3):null};a.tb.prototype.U4=function(){return this.pC()?this.dc(4):null};a.tb.prototype.cIa=function(){return this.pC()&&!this.FR()?this.dc(5):
null};a.tb.prototype.Qsa=function(){return this.pC()&&!this.FR()?this.dc(6):null};a.tb.prototype.ssa=function(){return this.dc(this.Vc()-this.mK)};a.tb.prototype.Rsa=function(){return this.dc(this.Vc()-(this.mK-1))};a.tb.prototype.dIa=function(){return this.dc(this.Vc()-(this.mK-2))};a.tb.prototype.VIa=function(){return this.dc(this.Vc()-(this.mK-3))};a.tb.prototype.xHa=function(){return this.dc(this.Vc()-(this.mK-4))};a.tb.prototype.jJa=function(){return this.dc(this.Vc()-(this.mK-5))};a.tb.prototype.PV=
function(a,x,f){this.Ea()?(-1!=x&&a.Jh(x),-1!=f&&a.ph(f)):(-1!=x&&a.Vh(x),-1!=f&&a.Ih(f))};a.tb.prototype.y4=function(a){return this.Ea()?a.rm():a.fl()};a.tb.prototype.cK=function(a){a=a.target;if(null!=a){var x=a.getId();if(null==x)return null;if("_border"==x.substr(x.length-7))return this.GHa(a);if("tick"!=x.substr(0,4)&&"ltb"!=x&&"rtb"!=x&&"bb"!=x&&"tab"!=x)return a}return null};a.tb.prototype.JJa=function(a){return"window"==a.getId()||"ftr"==a.getId()||"sta"==a.getId()||this.HR(a)?!0:!1};a.tb.prototype.GR=
function(){return window&&window.GR};a.tb.prototype.KGa=function(v,x){var f=new a.Rect(this.a,0,0,v,x,"bg");f.ab(this.ZXa);f.Xc(!0);this.B(f);return f};a.tb.prototype.Z0a=function(v,x){var f=this.Ea(),c=f?new a.Rect(this.a,0,0,v,0,"window"):new a.Rect(this.a,0,0,0,x,"window");c.ab(this.yaa,this.F_a);c.Xc(!0);if(!this.FR()){var p=this.ZU(),e=this.sba();if(f){var h=(v-36)/2,t=a.G.moveTo(h,0)+a.G.Gh(h+3,6,h+8,8)+a.G.lineTo(h+28,8)+a.G.Gh(h+33,6,h+36,0);a.G.closePath();var u=a.G.moveTo(h,0)+a.G.Gh(h+
3,-6,h+8,-8)+a.G.lineTo(h+28,-8)+a.G.Gh(h+33,-6,h+36,0);a.G.closePath();var D=new a.Rect(this.a,0,0,v,p,"lhb"),p=new a.Rect(this.a,0,0,v,p,"rhb"),y="row-resize";if(this.pma)var m=this.Saa(v,10),h=this.Saa(v,10);else m=this.Raa(h),h=this.Raa(h)}else h=(x-36)/2,t=a.G.moveTo(0,h)+a.G.Gh(6,h+3,8,h+8)+a.G.lineTo(8,h+28)+a.G.Gh(6,h+33,0,h+36),a.G.closePath(),u=a.G.moveTo(0,h)+a.G.Gh(-6,h+3,-8,h+8)+a.G.lineTo(-8,h+28)+a.G.Gh(-6,h+33,0,h+36),a.G.closePath(),D=new a.Rect(this.a,0-e,0,p,x,"lhb"),p=new a.Rect(this.a,
e,0,p,x,"rhb"),y="col-resize",this.pma?(m=this.Saa(10,x),h=this.Saa(10,x)):(m=this.Raa(h),h=this.Raa(h));D.ab(this.yaa,0);p.ab(this.yaa,0);D.Xc(!0);p.Xc(!0);t=new a.Ib(this.a,t,"lh");u=new a.Ib(this.a,u,"rh");t.ab(this.p0);t.uc(this.p0);u.ab(this.p0);u.uc(this.p0);this.yaa==this.p0&&(t.Xc(!0),u.Xc(!0));D.setCursor(y);p.setCursor(y);t.setCursor(y);u.setCursor(y);m.setCursor(y);h.setCursor(y);c.B(D);c.B(t);c.B(m);c.B(p);c.B(u);c.B(h)}c.setCursor("move");this.B(c);c=f?this.cg()?new a.Fb(this.a,this.vR(),
0,this.vR(),x,"tab"):new a.Fb(this.a,v-this.vR(),0,v-this.vR(),x,"tab"):this.rca()?new a.Fb(this.a,0,this.fE(),v,this.fE(),"tab"):new a.Fb(this.a,0,x-this.fE(),v,x-this.fE(),"tab");c.uc(this.q_a,this.r_a);c.Xc(!0);this.WFa=c;this.B(c);this.pC()&&(f?(c=new a.Rect(this.a,0,0,v,0,"lbg"),D=new a.Rect(this.a,0,0,v,0,"rbg")):(c=new a.Rect(this.a,0,0,0,x,"lbg"),D=new a.Rect(this.a,0,0,0,x,"rbg")),c.ab(this.lEa,this.EXa),this.B(c),D.ab(this.zFa,this.KZa),this.B(D),a.ti.Si()&&void 0!=e&&(this.sba(),f?(f=new a.Rect(this.a,
0,0,v,e,"lbgrh"),e=new a.Rect(this.a,0,0,v,e,"rbgrh")):(f=new a.Rect(this.a,0,0,e,x,"lbgrh"),e=new a.Rect(this.a,0,0,e,x,"rbgrh")),f.ab(this.lEa,0),this.B(f),e.ab(this.zFa,0),this.B(e)))};a.tb.prototype.Saa=function(v,x){var f=new a.Image(this.a,this.pma,(v-this.RDa)/2,(x-this.ODa)/2,this.RDa,this.ODa,"grpy");f.dd(!1);return f};a.tb.prototype.Raa=function(v){var x=new a.ca(this.a,"grpy"),f=this.kXa;if(this.Ea()){var c=8+v;v=3;for(var p=0;9>p;p++){var e=new a.Fb(this.a,c+2*p,v,c+2*p+1,v,"dot1"+p);
e.uc(f);x.B(e);v+=2;e=new a.Fb(this.a,c+1+2*p,v,c+1+2*p+1,v,"dot2"+p);e.uc(f);x.B(e);v+=2;e=new a.Fb(this.a,c+2*p,v,c+2*p+1,v,"dot3"+p);e.uc(f);x.B(e);v=3}e=new a.Fb(this.a,c+18,v,c+18+1,v,"dot4");e.uc(f);x.B(e);v+=4;e=new a.Fb(this.a,c+18,v,c+18+1,v,"dot5")}else{c=3;v=8+v;for(p=0;9>p;p++)e=new a.Fb(this.a,c,v+2*p,c,v+2*p+1,"dot1"+p),e.uc(f),x.B(e),c+=2,e=new a.Fb(this.a,c,v+1+2*p,c,v+1+2*p+1,"dot2"+p),e.uc(f),x.B(e),c+=2,e=new a.Fb(this.a,c,v+2*p,c,v+2*p+1,"dot3"+p),e.uc(f),x.B(e),c=3;e=new a.Fb(this.a,
c,v+18,c,v+18+1,"dot4");e.uc(f);x.B(e);c+=4;e=new a.Fb(this.a,c,v+18,c,v+18+1,"dot5")}e.uc(f);x.B(e);x.Xc(!0);return x};a.tb.prototype.g9a=function(){var v=this.Ea(),x=this.Ys(),f=this.cL(),c=v?this.bb:this.Oa,p=this.Ya,e=this.Wa,h=this.ob,v=this.wFa,t=a.ti.Bh(e,h,0,p),p=a.ti.Bh(e,h,c,p),t=this.Nc(t),c=Math.min(c,this.Nc(p)),v=this.Nc(v),c=c-t;this.Dq()?this.HL(x,f-v-c):this.HL(x,v);this.ada(x,c);this.A8();this.LG=this.A0a(f)};a.tb.prototype.N0a=function(v,x){var f=this.Ys(),c=a.tb.bAa/2;if(this.Ea())var p=
f.vb(),e=p+c,h=p+f.getHeight(),t=h-c,u=0,D=c,y=v-c,c=new a.Fb(this.a,u,e,v,e,"lh"),m=new a.Fb(this.a,u,t,v,t,"rh"),z=new a.Fb(this.a,D,0,D,p,"ltb"),w=new a.Fb(this.a,D,h,D,x,"rtb"),t=new a.Fb(this.a,y,p,y,h,"bb"),p=new a.Fb(this.a,D,p,D,h,"tb");else p=0,e=p+c,h=x,t=h-c,u=f.rb(),D=u+c,f=u+f.getWidth(),y=f-c,c=new a.Fb(this.a,D,p,D,h,"lh"),m=new a.Fb(this.a,y,p,y,h,"rh"),z=new a.Fb(this.a,0,e,u+1,e,"ltb"),w=new a.Fb(this.a,f-1,e,v,e,"rtb"),t=new a.Fb(this.a,u,t,f,t,"bb"),p=new a.Fb(this.a,u,e,f,e,"tb");
c.Xc(!0);m.Xc(!0);z.Xc(!0);w.Xc(!0);t.Xc(!0);p.Xc(!0);"none"!=this.J_a&&c.uc(this.I_a);this.B(c);"none"!=this.L_a&&m.uc(this.K_a);this.B(m);"none"!=this.kUa&&this.Lja&&(z.uc(this.Lja),w.uc(this.Lja));this.B(z);this.B(w);"none"!=this.H_a&&t.uc(this.G_a);this.B(t);"none"!=this.N_a&&p.uc(this.M_a);this.B(p)};a.tb.prototype.Y0a=function(){var v=this.Ea()?a.G.moveTo(6,0)+a.G.lineTo(0,5)+a.G.lineTo(5,5)+a.G.lineTo(5,17)+a.G.lineTo(0,17)+a.G.lineTo(6,22)+a.G.lineTo(12,17)+a.G.lineTo(7,17)+a.G.lineTo(7,5)+
a.G.lineTo(12,5)+a.G.closePath():a.G.moveTo(5,0)+a.G.lineTo(0,6)+a.G.lineTo(5,12)+a.G.lineTo(5,7)+a.G.lineTo(17,7)+a.G.lineTo(17,12)+a.G.lineTo(22,6)+a.G.lineTo(17,0)+a.G.lineTo(17,4)+a.G.lineTo(5,4)+a.G.lineTo(5,0)+a.G.closePath(),v=new a.Ib(this.a,v,"arr");v.ab("#ffffff");v.uc("#000000");v.Ci(!1);this.B(v);return v};a.tb.prototype.my=function(a){return this.Ea()?a.getHeight():a.getWidth()};a.tb.prototype.p8a=function(a,x){this.Ea()?a.Lb(x):a.kb(x)};a.tb.prototype.Pv=function(a){return this.Ea()?
a.qc():a.ac()};a.tb.prototype.HL=function(v,x){x=Math.max(0,x);this.Ea()?v.Eb(x):v.Va(x);if(this.pC()){this.yba().kb(x);var f=x+this.W4(v),c=this.U4();c.na(f);c.kb(Math.max(0,this.Oa-f));a.ti.Si()&&!this.FR()&&(c=this.sba(),this.cIa().na(x-c),this.Qsa().na(f))}};a.tb.prototype.W4=function(a){return this.my(a)};a.tb.prototype.ada=function(v,x){x=Math.max(this.Hba(),x);x=Math.min(this.Ea()?this.bb:this.Oa,x);this.p8a(v,x);if(this.pC()){var f=this.Pv(v)+x,c=this.U4();c.na(f);c.kb(Math.max(0,this.Oa-
f));a.ti.Si()&&!this.FR()&&this.Qsa().na(f)}if(!this.FR()){var f=v.dc(3),c=v.dc(4),p=v.dc(5);this.Ea()?(c.Eb(x),f.Eb(x-this.ZU()),p.Eb(x-10)):(c.Va(x),f.Va(x-this.ZU()),p.Va(x-10))}};a.tb.prototype.A0a=function(v){var x=this.Ya,f=this.Wa,c=this.ob,p=a.ti.Bh(f,c,1,v);v=a.ti.Bh(f,c,2,v);p=a.ti.Nc(f,c,p,x);return a.ti.Nc(f,c,v,x)-p};a.tb.prototype.i9a=function(v,x){if(null!=this.S2)for(var f=this.Ea(),c=this.cL(),p=0;p<this.S2.length;p++){var e=this.S2[p],h=this.Nc(parseInt(e.time,10)),e=e.label,t=0,
t=p+1<this.S2.length?this.Nc(parseInt(this.S2[p+1].time,10))-h:c-h;this.Dq()&&(h=c-h);f&&(t=this.Oa);t-=2*a.tb.Zza;this.o3(h,v,x,"tick"+p);this.mqa(h,e,v,x,t,"label"+p)}};a.tb.prototype.o3=function(v,x,f,c){v=this.Ea()?new a.Fb(this.a,0,v,x,v,c):new a.Fb(this.a,v,0,v,f,c);x=new a.ma(this.s_a);x.Na(a.Pa.Xu,3);v.Ha(x);v.Xc(!0);this.B(v)};a.tb.prototype.mqa=function(v,x,f,c,p,e,h){h=h||new a.j("font-weight:bold");this.Ea()?(x=new a.M(this.a,x,4,v,e),x.ub(h),this.cg()&&(h=x.V(),x.na(Math.max(4,this.Oa-
h.b-4)))):(c=this.rca()?2:c-this.fE()+2,f=a.tb.Zza,x=new a.M(this.a,x,v+f,c,e),x.ub(h),this.Dq()&&(h=x.V(),x.na(v-Math.min(h.b,p)-f)));a.ga.Yc(x,p,Infinity,this);x.FYa=x.gn()};a.tb.prototype.a9a=function(v,x){if(!(null==this.v_||isNaN(this.v_)||this.v_<this.Wa||this.v_>this.ob)){var f=this.Nc(this.v_);this.Ea()?f=new a.Fb(this.a,0,f,v,f,"ocd"):(this.cg()&&(f=v-f),f=new a.Fb(this.a,f,0,f,x,"ocd"));f.uc(this.pVa);f.Xc(!0);this.B(f)}};a.tb.prototype.Y5a=function(a,x){if(null!=this.lla)for(var f=0;f<
this.lla.length;f++)this.W_a(this.lla[f],a,x)};a.tb.prototype.W_a=function(v,x,f){var c=parseInt(v.rs,10),p=parseInt(v.re,10);v=v.c;if(null!=c&&null!=p){var e=this.cL(),c=this.Nc(c),p=this.Nc(p)-c;this.Dq()&&(c=e-c-p);x=this.Ea()?new a.Rect(this.a,0,c,x-this.vR(),p,"ftr"):new a.Rect(this.a,c,this.rca()?this.fE():0,p,f-this.fE(),"ftr");null!=v&&x.ab(v,.4);x.setCursor("move");x.Xc(!0);this.B(x)}};a.tb.prototype.hva=function(){};a.tb.prototype.Bqa=function(v){var x=this.Ys();x.dc(3);x.dc(4);x.dc(5);
if(v!=this.Pv(x)){var f=this.ssa(),c=this.Rsa(),p=this.dIa(),e=this.VIa(),h=this.xHa(),t=this.jJa();if(this.Ea())var u=x.qc,D=x.Eb,y=f.rm,m=f.Jh,z=f.hn,w=f.ph,A=c.rm,d=c.Jh,g=c.hn,B=c.ph,r=p.hn,l=p.ph,C=e.rm,K=e.Jh,E=h.rm,F=h.Jh,ca=h.hn,ja=h.ph,ea=t.rm,ha=t.Jh,da=t.hn,X=t.ph;else u=x.ac,D=x.Va,y=f.fl,m=f.Vh,z=f.Hl,w=f.Ih,A=c.fl,d=c.Vh,g=c.Hl,B=c.Ih,r=p.Hl,l=p.Ih,C=e.fl,K=e.Vh,E=h.fl,F=h.Vh,ca=h.Hl,ja=h.Ih,ea=t.fl,ha=t.Vh,da=t.Hl,X=t.Ih;var aa=this.mz,Y=this.Gba(),P=this.W4(x);v=Math.max(aa,Math.min(Y-
P,v));aa=this.Y4a()?new a.L(this.a,.5,0,a.nc.wV):null;this.Ms(aa,x,u,D,v);this.Ms(aa,f,y,m,v);this.Ms(aa,f,z,w,v);this.Ms(aa,c,A,d,v+P);this.Ms(aa,c,g,B,v+P);this.Ms(aa,p,r,l,v+1);this.Ms(aa,e,C,K,v+P-1);this.Ms(aa,h,E,F,v);this.Ms(aa,t,ea,ha,v);this.Ms(aa,h,ca,ja,v+P);this.Ms(aa,t,da,X,v+P);this.pC()&&(x=this.yba(),this.Ms(aa,x,x.getWidth,x.kb,v),P=v+P,x=this.U4(),f=x.getWidth,c=x.kb,p=x.rb,e=x.na,h=this.Ea()?this.bb:this.Oa,this.Ms(aa,x,f,c,h-P),this.Ms(aa,x,p,e,P),a.ti.Si()&&!this.FR()&&(x=this.sba(),
f=this.cIa(),c=f.rb,p=f.na,e=this.Qsa(),h=e.rb,t=e.na,this.Ms(aa,f,c,p,v-x),this.Ms(aa,e,h,t,P)));null!=aa&&aa.play()}};a.tb.prototype.Ms=function(v,x,f,c,p){null!=v?v.aa(a.L.ta,x,f,c,p):c.call(x,p)};a.tb.prototype.L7=function(v){var x=this.cK(v);if(x&&"bg"!=x.getId()&&"ocd"!=x.getId())if("label"==x.getId().substr(0,5)&&(x instanceof a.M||x instanceof a.Tb))x.$o()&&this.a.cf().wE(v.pageX,v.pageY,x.FYa,"#000000");else if(null!=this.rU&&this.HR(x)&&(v=this.a.nf(v.pageX,v.pageY),v=this.pf(v),this.Ea()?
this.rU.jb(v.x+6,v.y-10):this.rU.jb(v.x-6,v.y-20),this.rU.Ci(!0)),"window"==x.getId()||"ftr"==x.getId()||"arr"==x.getId()||this.HR(x))this.GR()&&this.setCursor("move");else return x};a.tb.prototype.K7=function(a){null==this.du&&this.setCursor("default");a=this.cK(a);if(null!=a)return this.HR(a)&&null!=this.rU&&this.rU.Ci(!1),a};a.tb.prototype.sM=function(v,x,f){v.stopPropagation();var c=this.cK(v);if(c&&"window"!=c.getId()&&!this.HR(c))if("bg"==c.getId()||"label"==c.getId().substr(0,5)||"ocd"==c.getId()||
"lbg"==c.getId()||"rbg"==c.getId()){void 0==x&&(x=v.pageX);void 0==f&&(f=v.pageY);v=this.a.nf(x,f);v=this.pf(v);this.Ea()?(f=v.y,c=this.bb):(f=v.x,c=this.Oa);v=this.Ys();x=f-this.my(v)/2;this.Bqa(x);this.Dq()&&(f=this.Oa-f);var p=this.Bh(f);f=new a.Mc(a.Mc.JY);f.setTime(p);x=Math.max(0,Math.min(x,c-this.my(v)));this.Dq()?(c=this.Bh(this.Oa-(x+this.my(v))),v=this.Bh(this.Oa-x)):(c=this.Bh(x),v=this.Bh(x+this.my(v)));f.Yca(c);f.Xca(v);this.dispatchEvent(f)}else return c};a.tb.prototype.uQ=function(v,
x,f){v=this.cK(v);if(null!=v&&this.JJa(v)){if("ftr"==v.getId()||"sta"==v.getId())v=this.Ys();this.r$=x;this.XDa=f;if(this.HR(v)){x=this.Ys();this.Dq()?(this.Wna=this.Oa-x.rb(),this.Xna=this.Wna-x.getWidth()):(this.Xna=x.rb(),this.Wna=this.Xna+x.getWidth());"grpy"==v.getParent().getId()&&(v=v.getParent());f=v.getId();"grpy"==f&&(v=x.lba(v),f=v.getId());if("lh"==f||"rh"==f)v=x.lba(v),f=v.getId();"lbgrh"==f&&(v=x.dc(0));"rbgrh"==f&&(v=x.dc(x.Vc()-3));a.ti.Si()||(this.Ea()?(v.Qa(0-a.tb.I7),v.Lb(2*(v.getHeight()+
a.tb.I7))):(v.na(0-a.tb.I7),v.kb(2*(v.getWidth()+a.tb.I7))));this.W5a(v.getCursor())}this.du=v;v=new a.Mc(a.Mc.Rga);this.dispatchEvent(v);return!0}return!1};a.tb.prototype.W5a=function(a){var x=this.Ys();null!=x&&x.setCursor(a);if(this.pC()){var x=this.yba(),f=this.U4();null!=x&&null!=f&&(x.setCursor(a),f.setCursor(a))}};a.tb.prototype.$6a=function(){var a=this.Ys();null!=a&&a.setCursor("move");if(this.pC()){var a=this.yba(),x=this.U4();null!=a&&null!=x&&(a.setCursor("default"),x.setCursor("default"))}};
a.tb.prototype.SD=function(){null!=this.du&&1==this.RT&&("window"==this.du.getId()?this.iHa(0,0):this.HR(this.du)&&(this.nra(),a.ti.Si()||(this.Ea()?(this.du.Qa(0),this.du.Lb(this.ZU())):(this.du.na(0),this.du.kb(this.ZU()))),this.$6a()),this.RT=!1,this.du=null,this.r$=-1)};a.tb.prototype.x3=function(a,x,f){if(null!=this.du&&-1!=this.r$){this.RT=!0;var c=x-this.r$,p=f-this.XDa;this.r$=x;this.XDa=f;"window"==this.du.getId()?this.oJa(0,c,p):"lh"==this.du.getId()||"lhb"==this.du.getId()?this.K4a(a,c,
p):"rh"!=this.du.getId()&&"rhb"!=this.du.getId()||this.Hta(a,c,p)}};a.tb.prototype.SS=function(a){var x=a.touches;this.DU=x[0].pageX;this.hQ=x[0].pageY;2==x.length&&(a.preventDefault(),this.EU=x[1].pageX,this.a3=x[1].pageY,20>Math.abs(this.hQ-this.a3)?this.ys=0:this.a3=this.EU=this.hQ=this.DU=null)};a.tb.prototype.yya=function(a){a.preventDefault();a=a.touches;if(null!=this.EU&&null!=this.a3)50>this.ys?this.ys++:(this.Hta(null,a[1].pageX-this.EU,0),this.EU=a[1].pageX,this.ys=0);else{var x=Math.abs(this.hQ-
a[0].pageY);if(3<Math.abs(this.DU-a[0].pageX)||3<x)this.hQ=this.DU=null}};a.tb.prototype.N7=function(a){null!=this.EU&&null!=this.a3?this.nra():null!=this.DU&&null!=this.hQ&&this.sM(a,this.DU,this.hQ);this.a3=this.EU=this.hQ=this.DU=null};a.tb.prototype.qM=function(v){var x=v.keyCode;if(x===a.KeyboardEvent.Ne||x===a.KeyboardEvent.Be)x=x===a.KeyboardEvent.Ne?-1:1,(v.shiftKey?this.Hta:this.oJa).call(this,v,x,x)};a.tb.prototype.jfa=function(v){var x=v.keyCode;if(x===a.KeyboardEvent.Ne||x===a.KeyboardEvent.Be)x=
x===a.KeyboardEvent.Ne?-1:1,(v.shiftKey?this.nra:this.iHa).call(this,x,x)};a.tb.prototype.J5a=function(a){a/=this.LG;this.Dq()&&(a=0-a);this.Bqa(a)};a.tb.prototype.oJa=function(v,x,f){this.jHa(a.Mc.Sga,x,f)};a.tb.prototype.iHa=function(v,x){this.jHa(a.Mc.pza,v,x)};a.tb.prototype.jHa=function(v,x,f){var c=this.Ys(),p=this.Pv(c),e=this.my(c),h=this.mz,t=this.Gba();x=this.Ea()?f:x;p+x<=h?(this.HL(c,h),e=this.Dq()?a.Mc.x7:a.Mc.o8):p+e+x>=t?(this.HL(c,t-e),e=this.Dq()?a.Mc.o8:a.Mc.x7):(this.HL(c,p+x),
e=this.Dq()?(t-e-p-this.mz)*this.LG:(p-this.mz)*this.LG);this.A8();v=new a.Mc(v);v.setPosition(e);this.Dq()?(e=this.Bh(this.Oa-(p+this.my(c))),c=this.Bh(this.Oa-p)):(e=this.Bh(p),c=this.Bh(p+this.my(c)));v.Yca(e);v.Xca(c);this.dispatchEvent(v)};a.tb.prototype.K4a=function(a,x,f){this.nJa(a,x,f,!0)};a.tb.prototype.Hta=function(a,x,f){this.nJa(a,x,f,!1)};a.tb.prototype.nJa=function(v,x,f,c){var p=this.cL();f=this.Ea()?f:x;if(0!=f){x=this.Ys();var e=this.Pv(x),h=this.W4(x);if(c){if(h-f<=this.Hba()||
e+f<=this.mz)return;v=this.Ea()?this.a.nf(this.Mba(v),this.Nba(v)).y:this.a.nf(this.Mba(v),this.Nba(v)).x;v=this.pf(v);if(0<f&&v<=e||0>f&&v>=e)return;this.HL(x,e+f);this.ada(x,h-f)}else{if(h+f<=this.Hba()||e+h+f>=this.Gba())return;v=this.Ea()?this.a.nf(this.Mba(v),this.Nba(v)).y:this.a.nf(this.Mba(v),this.Nba(v)).x;v=this.pf(v);if(0<f&&v<=e+h||0>f&&v>=e+h)return;this.ada(x,h+f)}this.A8();v=this.Bh(this.W4(x));v=p*(this.ob-this.Wa)/(v-this.Wa);p=new a.Mc(a.Mc.oza);p.aLa(v);p.N7a(this.Dq()?c:!c);c?
p.SKa(0>f):p.SKa(0<f);this.Dq()?(c=this.Bh(this.Oa-(this.Pv(x)+this.my(x))),x=this.Bh(this.Oa-this.Pv(x))):(c=this.Bh(this.Pv(x)),x=this.Bh(this.Pv(x)+this.my(x)));p.Yca(c);p.Xca(x);this.dispatchEvent(p)}};a.tb.prototype.nra=function(){var v=this.Wa,x=this.ob,f=this.Ya,c=this.cL(),p=this.Ys(),e=this.Bh(this.my(p)),v=c*(x-v)/(e-v),x=this.Bh(this.Xna),c=this.Bh(this.Wna);this.Dq()?(e=this.Bh(this.Oa-(this.Pv(p)+this.my(p))),p=this.Bh(this.Oa-this.Pv(p))):(e=this.Bh(this.Pv(p)),p=this.Bh(this.Pv(p)+
this.my(p)));var h=new a.Mc(a.Mc.w8);h.j8a(f);h.aLa(v);h.k8a(x);h.i8a(c);h.Yca(e);h.Xca(p);this.dispatchEvent(h)};a.tb.prototype.A8=function(){var v=this.Ys(),x=a.tb.bAa/2,f=this.Pv(v),c=f+x,v=f+this.W4(v)-x,x=this.ssa(),p=this.Rsa(),e=this.dIa(),h=this.VIa(),t=this.xHa(),u=this.jJa();this.PV(x,c,c);this.PV(p,v,v);this.PV(e,-1,f);this.PV(h,this.y4(p),-1);this.PV(t,this.y4(x),this.y4(p));this.PV(u,this.y4(x),this.y4(p))};a.tb.prototype.dispatchEvent=function(v){a.pn.dispatchEvent(this.Sb,this.Ba,this,
v)};a.tb.prototype.Ec=function(){this.u&&(this.u.ln(this),this.u.Ec(),this.u=null);a.ti.Si()?(this.Oc(a.TouchEvent.Nj,this.SS,!1,this),this.Oc(a.TouchEvent.gq,this.yya,!1,this),this.Oc(a.TouchEvent.Wl,this.N7,!1,this),this.Oc(a.MouseEvent.He,this.sM,!1,this)):(this.Oc(a.MouseEvent.Hj,this.L7,!1,this),this.Oc(a.MouseEvent.Yh,this.K7,!1,this),this.Oc(a.MouseEvent.He,this.sM,!1,this),this.Oc(a.KeyboardEvent.Dm,this.qM,!1,this),this.Oc(a.KeyboardEvent.Rn,this.jfa,!1,this));a.tb.C.Ec.call(this)};a.f.v(D,
a.ka);D.If={overviewPosition:"below",style:{currentTimeIndicatorColor:"#c000d1",handleFillColor:"#ffffff",handleTextureColor:"#b3c6db",leftFilterPanelAlpha:.7,leftFilterPanelColor:"#ffffff",overviewBackgroundColor:"#e6ecf3",rightFilterPanelAlpha:.7,rightFilterPanelColor:"#ffffff",timeAxisBarColor:"#e5e5e5",timeAxisBarAlpha:1,timeIndicatorColor:"#bcc7d2",windowBackgroundAlpha:1,windowBackgroundColor:"#ffffff",windowBorderBottomColor:"#4f4f4f",windowBorderBottomStyle:"solid",windowBorderLeftColor:"#4f4f4f",
windowBorderLeftStyle:"solid",windowBorderRightColor:"#4f4f4f",windowBorderRightStyle:"solid",windowBorderTopColor:"#4f4f4f",windowBorderTopStyle:"solid"}};a.KM=function(a){this.Init(a)};a.f.v(a.KM,a.f);a.KM.prototype.Init=function(a){this.Fa=a};a.KM.prototype.parse=function(a){return this.bT(a)};a.KM.prototype.bT=function(v){var x={};x.uGa=v.animationOnClick;null!=v.startTime&&(x.start=v.startTime);null!=v.endTime&&(x.end=v.endTime);null==x.start&&(x.start=(new Date).getTime());if(null==x.end||x.end<=
x.start)x.end=x.start+864E5;null!=v.currentTime&&(x.currentTime=v.currentTime);null!=v.initialFocusTime&&(x.V4a=v.initialFocusTime);x.orientation="horizontal";null!=v.orientation&&(x.orientation=v.orientation);x.gHa=v.featuresOff;x.Nua=v.minimumWindowSize;x.H5a=v.leftMargin;x.d7a=v.rightMargin;if(null!=v.viewportEndTime){var f=v.viewportEndTime,c=x.start;null!=v.viewportStartTime&&v.viewportStartTime<f&&(c=v.viewportStartTime);x.width=null!=v.viewportEndPos?this.EGa(x.start,x.end,c,f,v.viewportEndPos):
this.EGa(x.start,x.end,c,f,this.Fa.Oa);x.Rva=c}else x.Rva=x.start;0==x.width&&(x.width=1E3);x.mab="below";x.ZI="none";x.oua=a.m.ea(this.Fa.a).toString();null!=v.rtl&&(x.oua=v.rtl.toString());return x};a.KM.prototype.EGa=function(a,x,f,c,p){a=p*(x-a);f=c-f;return 0==a||0==f?0:a/f};a.Mc=function(v){this.Init(a.Mc.ne);this.Dn=v};a.f.v(a.Mc,a.Og);a.Mc.ne="overview";a.Mc.Rga="dropCallback";a.Mc.JY="scrollTime";a.Mc.Sga="scrollPos";a.Mc.pza="scrollEnd";a.Mc.w8="rangeChange";a.Mc.oza="rangeChanging";a.Mc.Aza=
"time";a.Mc.Tya="pos";a.Mc.zOa="oldSize";a.Mc.nOa="newSize";a.Mc.AOa="oldStartTime";a.Mc.Lya="newStartTime";a.Mc.yOa="oldEndTime";a.Mc.Kya="newEndTime";a.Mc.eNa="expand";a.Mc.dNa="endHandle";a.Mc.o8=-1;a.Mc.x7=-2;a.Mc.prototype.setTime=function(v){this.Vx(a.Mc.Aza,v)};a.Mc.prototype.getTime=function(){return this.lR(a.Mc.Aza)};a.Mc.prototype.j8a=function(v){this.Vx(a.Mc.zOa,v)};a.Mc.prototype.aLa=function(v){this.Vx(a.Mc.nOa,v)};a.Mc.prototype.k8a=function(v){this.Vx(a.Mc.AOa,v)};a.Mc.prototype.Yca=
function(v){this.Vx(a.Mc.Lya,v)};a.Mc.prototype.H4=function(){return this.lR(a.Mc.Lya)};a.Mc.prototype.i8a=function(v){this.Vx(a.Mc.yOa,v)};a.Mc.prototype.Xca=function(v){this.Vx(a.Mc.Kya,v)};a.Mc.prototype.G4=function(){return this.lR(a.Mc.Kya)};a.Mc.prototype.SKa=function(v){this.Vx(a.Mc.eNa,v)};a.Mc.prototype.N7a=function(v){this.Vx(a.Mc.dNa,v)};a.Mc.prototype.setPosition=function(v){this.Vx(a.Mc.Tya,v)};a.Mc.prototype.Sh=function(){return this.lR(a.Mc.Tya)};a.f.v(F,a.u);F.prototype.Lf=function(){a.ie.IU(this.Jc,
this.dH,this.cH,this.bH,this)};F.prototype.dH=function(v){return a.m.eb()?this.D1(v):this.v1(v)};F.prototype.cH=function(v){return a.m.eb()?this.C1(v):this.u1(v)};F.prototype.bH=function(v){return a.m.eb()?this.B1(v):this.t1(v)};F.prototype.Cs=function(v,x){this.LB||(this.LB=this.a.Hu());return new a.P(v-this.LB.x,x-this.LB.y)};F.prototype.v1=function(v){if(v.button!=a.MouseEvent.d8){var x=this.Cs(v.pageX,v.pageY);a.u.Ud(v);this.a.Gc.Bt.parentNode.focus();return this.Jc.uQ(v,x.x,x.y)}return!1};F.prototype.u1=
function(a){var x=this.Cs(a.pageX,a.pageY);a.stopPropagation();this.Jc.x3(a,x.x,x.y);return!0};F.prototype.t1=function(a){a.stopPropagation();this.Jc.SD();this.LB=null};F.prototype.D1=function(a){var x=a.touches;a.stopPropagation();return 1==x.length?(x=this.Cs(x[0].pageX,x[0].pageY),a.preventDefault(),this.Jc.uQ(a,x.x,x.y)):!1};F.prototype.C1=function(a){var x=a.touches;1==x.length&&(x=this.Cs(x[0].pageX,x[0].pageY),this.Jc.x3(a,x.x,x.y),a.preventDefault());a.stopPropagation()};F.prototype.B1=function(v){this.Jc.SD();
a.u.Ud(v);this.LB=null};a.K(a,"Overview",a.tb);a.K(a.tb.prototype,"render",a.tb.prototype.ia);var E={};a.f.v(E,a.f);E.V2a=function(a){return null!=a._hfc?a._hfc:a.style.handleFillColor};E.X2a=function(a){return null!=a._htc?a._htc:a.style.handleTextureColor};E.U2a=function(a){return null!=a._hbi?a._hbi:a.style.handleBackgroundImage};E.Y2a=function(a){return null!=a._hw?a._hw:a.style.handleWidth};E.W2a=function(a){return null!=a._hh?a._hh:a.style.handleHeight};E.R1a=function(a){return null!=a._btc?
a._btc:a.style.borderTopColor};E.S1a=function(a){return null!=a._bts?a._bts:a.style.borderTopStyle};E.r4a=function(a){return null!=a._wbc?a._wbc:a.style.windowBackgroundColor};E.q4a=function(a){return a.style.windowBackgroundAlpha};E.z4a=function(a){return null!=a._wbts?a._wbts:a.style.windowBorderTopStyle};E.x4a=function(a){return null!=a._wbrs?a._wbrs:a.style.windowBorderRightStyle};E.t4a=function(a){return null!=a._wbbs?a._wbbs:a.style.windowBorderBottomStyle};E.v4a=function(a){return null!=a._wbls?
a._wbls:a.style.windowBorderLeftStyle};E.y4a=function(a){return null!=a._wbtc?a._wbtc:a.style.windowBorderTopColor};E.w4a=function(a){return null!=a._wbrc?a._wbrc:a.style.windowBorderRightColor};E.s4a=function(a){return null!=a._wbbc?a._wbbc:a.style.windowBorderBottomColor};E.u4a=function(a){return null!=a._wblc?a._wblc:a.style.windowBorderLeftColor};E.L4=function(a){return null!=a._obc?a._obc:a.style.overviewBackgroundColor};E.j2a=function(a){return null!=a._ctic?a._ctic:a.style.currentTimeIndicatorColor};
E.j4a=function(a){return null!=a._tabc?a._tabc:a.style.timeAxisBarColor};E.i4a=function(a){return null!=a._tabo?a._tabo:a.style.timeAxisBarAlpha};E.k4a=function(a){return null!=a._tic?a._tic:a.style.timeIndicatorColor};E.g3a=function(a){return a.style.leftFilterPanelColor};E.f3a=function(a){return a.style.leftFilterPanelAlpha};E.K3a=function(a){return a.style.rightFilterPanelColor};E.J3a=function(a){return a.style.rightFilterPanelAlpha}})(dvt);
  return dvt;
});

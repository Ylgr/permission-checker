"use strict";(self.webpackChunkpermission_checker=self.webpackChunkpermission_checker||[]).push([[954],{8249:(t,a,r)=>{r.d(a,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},8954:(t,a,r)=>{r.r(a),r.d(a,{Split:()=>l});var e=r(4942),s=r(2257),c=r(4029),i=r(7588),n=r(1313),o=r(1137),p=r(4376),d=r(8249),h=r(6432);r(518),r(1583),r(8528);class l{get chainId(){return this._chainId}constructor(t,a,r){(0,e.Z)(this,"withdraw",(0,o.c)((async t=>o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await(0,n.aP)(t)]})))),(0,e.Z)(this,"withdrawToken",(0,o.c)((async(t,a)=>o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:await Promise.all([(0,n.aP)(a),(0,n.aP)(t)])})))),(0,e.Z)(this,"distribute",(0,o.c)((async()=>o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]})))),(0,e.Z)(this,"distributeToken",(0,o.c)((async t=>o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await(0,n.aP)(t)]}))));let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,W=arguments.length>5?arguments[5]:void 0,w=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cu(t,a,c,s,r);this._chainId=W,this.abi=n.bn.parse(c||[]),this.contractWrapper=w,this.storage=r,this.metadata=new p.C(this.contractWrapper,n.c9,this.storage),this.app=new p.b(this.contractWrapper,this.metadata,this.storage),this.roles=new h.C(this.contractWrapper,l.contractRoles),this.encoder=new i.C(this.contractWrapper),this.estimator=new p.G(this.contractWrapper),this.events=new p.a(this.contractWrapper),this.interceptor=new d.C(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){const t=[];let a=s.O$.from(0);const r=await this.contractWrapper.read("payeeCount",[]);for(;a.lt(r);)try{const r=await this.contractWrapper.read("payee",[a]);t.push(await this.getRecipientSplitPercentage(r)),a=a.add(1)}catch(e){if("method"in e&&e.method.toLowerCase().includes("payee(uint256)"))break;throw e}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),a={};for(const r of t)a[r.address]=await this.balanceOf(r.address);return a}async balanceOfTokenAllRecipients(t){const[a,r]=await Promise.all([(0,n.aP)(t),this.getAllRecipients()]),e={};for(const s of r)e[s.address]=await this.balanceOfToken(s.address,a);return e}async balanceOf(t){const[a,r,e]=await Promise.all([(0,n.aP)(t),this.contractWrapper.getProvider().getBalance(this.getAddress()),this.contractWrapper.read("totalReleased",[])]),s=r.add(e);return this._pendingPayment(a,s,await this.contractWrapper.read("released",[a]))}async balanceOfToken(t,a){const[e,s]=await Promise.all([(0,n.aP)(a),(0,n.aP)(t)]),o=(await Promise.resolve().then(r.t.bind(r,9242,19))).default,p=new c.CH(e,o,this.contractWrapper.getProvider()),[d,h,l]=await Promise.all([p.balanceOf(this.getAddress()),this.contractWrapper.read("totalReleased",[e]),this.contractWrapper.read("released",[e,s])]),W=d.add(h),w=await this._pendingPayment(s,W,l);return await(0,i.a)(this.contractWrapper.getProvider(),e,w)}async getRecipientSplitPercentage(t){const[a,r,e]=await Promise.all([(0,n.aP)(t),this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:a,splitPercentage:e.mul(s.O$.from(1e7)).div(r).toNumber()/1e5}}async _pendingPayment(t,a,r){const[e,s]=await Promise.all([(0,n.aP)(t),this.contractWrapper.read("totalShares",[])]);return a.mul(await this.contractWrapper.read("shares",[e])).div(s).sub(r)}async prepare(t,a,r){return o.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}(0,e.Z)(l,"contractRoles",n.dF)}}]);
//# sourceMappingURL=954.2b7aa9c5.chunk.js.map
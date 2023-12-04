"use strict";(self.webpackChunkpermission_checker=self.webpackChunkpermission_checker||[]).push([[515],{8249:(t,r,e)=>{e.d(r,{C:()=>a});class a{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},5086:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(4942),c=e(1137),s=e(1313);class n{constructor(t){(0,a.Z)(this,"featureName",s.dn.name),(0,a.Z)(this,"set",(0,c.c)((async t=>{const r=await s.bJ.parseAsync(t);return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return s.bJ.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},6167:(t,r,e)=>{e.d(r,{C:()=>n});var a=e(4942),c=e(1137),s=e(1313);class n{constructor(t){(0,a.Z)(this,"featureName",s.d6.name),(0,a.Z)(this,"setRecipient",(0,c.c)((async t=>c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},9806:(t,r,e)=>{e.d(r,{S:()=>n});var a=e(4942),c=e(1137),s=e(1207);class n{get chainId(){return this._chainId}constructor(t,r,e){(0,a.Z)(this,"transfer",(0,c.c)((async(t,r)=>this.erc20.transfer.prepare(t,r)))),(0,a.Z)(this,"transferFrom",(0,c.c)((async(t,r,e)=>this.erc20.transferFrom.prepare(t,r,e)))),(0,a.Z)(this,"setAllowance",(0,c.c)((async(t,r)=>this.erc20.setAllowance.prepare(t,r)))),(0,a.Z)(this,"transferBatch",(0,c.c)((async t=>this.erc20.transferBatch.prepare(t)))),this.contractWrapper=t,this.storage=r,this.erc20=new s.f(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(){return this.erc20.get()}async balance(){return await this.erc20.balance()}async balanceOf(t){return this.erc20.balanceOf(t)}async totalSupply(){return await this.erc20.totalSupply()}async allowance(t){return await this.erc20.allowance(t)}async allowanceOf(t,r){return await this.erc20.allowanceOf(t,r)}}},9515:(t,r,e)=>{e.r(r),e.d(r,{TokenDrop:()=>w});var a=e(4942),c=e(8624),s=e(1313),n=e(1137),i=e(4376),o=e(7588),p=e(8249),h=e(5086),l=e(6432),d=e(6167),u=e(6898),g=e(9806);e(518),e(1583),e(8528),e(8262);class w extends g.S{constructor(t,r,e){let c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},g=arguments.length>4?arguments[4]:void 0,f=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new s.cu(t,r,g,c,e),e,f),(0,a.Z)(this,"claim",(0,n.c)((()=>{var t=this;return async function(r){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,e)}})())),(0,a.Z)(this,"claimTo",(0,n.c)((()=>{var t=this;return async function(r,e){let a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return t.erc20.claimTo.prepare(r,e,{checkERC20Allowance:a})}})())),(0,a.Z)(this,"delegateTo",(0,n.c)((async t=>n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await(0,s.aP)(t)]})))),(0,a.Z)(this,"burnTokens",(0,n.c)((async t=>this.erc20.burn.prepare(t)))),(0,a.Z)(this,"burnFrom",(0,n.c)((async(t,r)=>this.erc20.burnFrom.prepare(t,r)))),this.abi=s.bn.parse(g||[]),this.metadata=new i.C(this.contractWrapper,s.dH,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new l.C(this.contractWrapper,w.contractRoles),this.encoder=new o.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.sales=new d.C(this.contractWrapper),this.platformFees=new h.C(this.contractWrapper),this.interceptor=new p.C(this.contractWrapper),this.claimConditions=new u.D(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await(0,s.aP)(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await(0,s.aP)(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,s.H)("transfer"),c.d])}async prepare(t,r,e){return n.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.Z)(w,"contractRoles",s.dG)}}]);
//# sourceMappingURL=515.17f0e0a6.chunk.js.map
"use strict";(self.webpackChunkpermission_checker=self.webpackChunkpermission_checker||[]).push([[306],{5086:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(4942),s=e(1137),n=e(1313);class c{constructor(t){(0,a.Z)(this,"featureName",n.dn.name),(0,a.Z)(this,"set",(0,s.c)((async t=>{const r=await n.bJ.parseAsync(t);return s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bJ.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},6167:(t,r,e)=>{e.d(r,{C:()=>c});var a=e(4942),s=e(1137),n=e(1313);class c{constructor(t){(0,a.Z)(this,"featureName",n.d6.name),(0,a.Z)(this,"setRecipient",(0,s.c)((async t=>s.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPrimarySaleRecipient",args:[t]})))),this.contractWrapper=t}async getRecipient(){return await this.contractWrapper.read("primarySaleRecipient",[])}}},5306:(t,r,e)=>{e.r(r),e.d(r,{Edition:()=>W});var a=e(4942),s=e(8624),n=e(1313),c=e(1137),i=e(4376),p=e(7588),o=e(8249),h=e(7372),l=e(5086),d=e(6432),u=e(6167),m=e(8242),y=e(1447);e(518),e(1583),e(8528),e(8262);class W extends y.S{constructor(t,r,e){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},y=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0;super(arguments.length>6&&void 0!==arguments[6]?arguments[6]:new n.cu(t,r,y,s,e),e,g),(0,a.Z)(this,"mint",(0,c.c)((async t=>this.erc1155.mint.prepare(t)))),(0,a.Z)(this,"mintTo",(0,c.c)((async(t,r)=>this.erc1155.mintTo.prepare(t,r)))),(0,a.Z)(this,"mintAdditionalSupply",(0,c.c)((async(t,r)=>this.erc1155.mintAdditionalSupply.prepare(t,r)))),(0,a.Z)(this,"mintAdditionalSupplyTo",(0,c.c)((async(t,r,e)=>this.erc1155.mintAdditionalSupplyTo.prepare(t,r,e)))),(0,a.Z)(this,"mintBatch",(0,c.c)((async t=>this.erc1155.mintBatch.prepare(t)))),(0,a.Z)(this,"mintBatchTo",(0,c.c)((async(t,r)=>this.erc1155.mintBatchTo.prepare(t,r)))),(0,a.Z)(this,"burn",(0,c.c)((async(t,r)=>this.erc1155.burn.prepare(t,r)))),this.abi=n.bn.parse(y||[]),this.metadata=new i.C(this.contractWrapper,n.cl,this.storage),this.app=new i.b(this.contractWrapper,this.metadata,this.storage),this.roles=new d.C(this.contractWrapper,W.contractRoles),this.royalties=new h.C(this.contractWrapper,this.metadata),this.sales=new u.C(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.estimator=new i.G(this.contractWrapper),this.events=new i.a(this.contractWrapper),this.platformFees=new l.C(this.contractWrapper),this.interceptor=new o.C(this.contractWrapper),this.signature=new m.f(this.contractWrapper,this.storage,this.roles),this.owner=new h.a(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAll(t){return this.erc1155.getAll(t)}async getOwned(t,r){return this.erc1155.getOwned(t,r)}async getTotalCount(){return this.erc1155.totalCount()}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[(0,n.H)("transfer"),s.d])}async getMintTransaction(t,r){return this.erc1155.getMintTransaction(t,r)}async prepare(t,r,e){return c.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}}(0,a.Z)(W,"contractRoles",n.dz)},1447:(t,r,e)=>{e.d(r,{S:()=>c});var a=e(4942),s=e(1137),n=e(8242);class c{get chainId(){return this._chainId}constructor(t,r,e){(0,a.Z)(this,"transfer",(0,s.c)((()=>{var t=this;return async function(r,e,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.transfer.prepare(r,e,a,s)}})())),(0,a.Z)(this,"setApprovalForAll",(0,s.c)((async(t,r)=>this.erc1155.setApprovalForAll.prepare(t,r)))),(0,a.Z)(this,"airdrop",(0,s.c)((()=>{var t=this;return async function(r,e,a){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];return t.erc1155.airdrop.prepare(r,e,a,s)}})())),this.contractWrapper=t,this.storage=r,this.erc1155=new n.e(this.contractWrapper,this.storage,e),this._chainId=e}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){return this.erc1155.get(t)}async totalSupply(t){return this.erc1155.totalSupply(t)}async balanceOf(t,r){return this.erc1155.balanceOf(t,r)}async balance(t){return this.erc1155.balance(t)}async isApproved(t,r){return this.erc1155.isApproved(t,r)}}}}]);
//# sourceMappingURL=306.235b58b4.chunk.js.map
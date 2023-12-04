"use strict";(self.webpackChunkpermission_checker=self.webpackChunkpermission_checker||[]).push([[297],{8249:(t,a,r)=>{r.d(a,{C:()=>e});class e{constructor(t){this.contractWrapper=t}overrideNextTransaction(t){this.contractWrapper.withTransactionOverride(t)}}},8242:(t,a,r)=>{r.d(a,{D:()=>P,e:()=>Z,f:()=>D});var e=r(4942),i=r(8624),n=r(9716),s=r(2257),o=r(5422),c=r(3374),p=r(1313),l=r(2655),h=r(4376),d=r(4405),u=r(1137),m=r(874),g=r(7372),y=r(8262),w=r.n(y),W=r(7009),C=r(7588),f=r(4554),b=r(4434),v=r(3778);class P{constructor(t,a,r){(0,e.Z)(this,"set",(0,u.c)((()=>{var t=this;return async function(a,r){let e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t.setBatch.prepare([{tokenId:a,claimConditions:r}],e)}})())),(0,e.Z)(this,"setBatch",(0,u.c)((()=>{var t=this;return async function(a){let r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const e={},s=await Promise.all(a.map((async a=>{let{tokenId:s,claimConditions:o}=a,c=o;if(t.isLegacySinglePhaseDrop(t.contractWrapper))if(r=!0,0===o.length)c=[{startTime:new Date(0),currencyAddress:i.d,price:0,maxClaimableSupply:0,maxClaimablePerWallet:0,waitInSeconds:0,merkleRootHash:n.hexZeroPad([0],32),snapshot:[]}];else if(o.length>1)throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed");(t.isNewSinglePhaseDrop(t.contractWrapper)||t.isNewMultiphaseDrop(t.contractWrapper))&&c.forEach((t=>{var a;if(t.snapshot&&t.snapshot.length>0&&(void 0===t.maxClaimablePerWallet||"unlimited"===t.maxClaimablePerWallet))throw new Error("maxClaimablePerWallet must be set to a specific value when an allowlist is set.\nSet it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist.\n\nex:\ncontract.claimConditions.set(tokenId, [{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])");if(t.snapshot&&t.snapshot.length>0&&"0"===(null===(a=t.maxClaimablePerWallet)||void 0===a?void 0:a.toString())&&0===t.snapshot.map((t=>{return"string"===typeof t?0:Number((null===(a=t.maxClaimable)||void 0===a?void 0:a.toString())||0);var a})).reduce(((t,a)=>t+a),0))throw new Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.")}));const{snapshotInfos:p,sortedConditions:l}=await(0,W.D)(c,0,t.contractWrapper.getProvider(),t.storage,t.getSnapshotFormatVersion());return p.forEach((t=>{e[t.merkleRoot]=t.snapshotUri})),{tokenId:s,sortedConditions:l}}))),o=await t.metadata.get(),c=[];for(const t of Object.keys(o.merkle||{}))e[t]=o.merkle[t];if(!w()(o.merkle,e)){const a=await t.metadata.parseInputMetadata({...o,merkle:e}),r=await t.metadata._parseAndUploadMetadata(a);if(!(0,h.h)("setContractURI",t.contractWrapper))throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.");{const a=new C.C(t.contractWrapper);c.push(a.encode("setContractURI",[r]))}}if(s.forEach((a=>{let{tokenId:e,sortedConditions:i}=a;const n=new C.C(t.contractWrapper);if(t.isLegacySinglePhaseDrop(t.contractWrapper)){const a=new C.C(t.contractWrapper);c.push(a.encode("setClaimConditions",[e,(0,W.E)(i[0]),r]))}else if(t.isLegacyMultiPhaseDrop(t.contractWrapper))c.push(n.encode("setClaimConditions",[e,i.map(W.E),r]));else if(t.isNewSinglePhaseDrop(t.contractWrapper))c.push(n.encode("setClaimConditions",[e,(0,W.F)(i[0]),r]));else{if(!t.isNewMultiphaseDrop(t.contractWrapper))throw new Error("Contract does not support claim conditions");c.push(n.encode("setClaimConditions",[e,i.map(W.F),r]))}})),(0,h.h)("multicall",t.contractWrapper))return u.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[c]});throw new Error("Contract does not support multicall")}})())),(0,e.Z)(this,"update",(0,u.c)((async(t,a,r)=>{const e=await this.getAll(t),i=await(0,W.H)(a,r,e);return await this.set.prepare(t,i)}))),this.storage=r,this.contractWrapper=t,this.metadata=a}async getActive(t,a){const r=await this.get(t),e=await this.metadata.get();return await(0,W.v)(r,0,this.contractWrapper.getProvider(),e.merkle,this.storage,(null===a||void 0===a?void 0:a.withAllowList)||!1)}async get(t,a){if(this.isLegacySinglePhaseDrop(this.contractWrapper)){const a=await this.contractWrapper.read("claimCondition",[t]);return(0,W.w)(a)}if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){const r=void 0!==a?a:await this.contractWrapper.read("getActiveClaimConditionId",[t]),e=await this.contractWrapper.read("getClaimConditionById",[t,r]);return(0,W.w)(e)}if(this.isNewSinglePhaseDrop(this.contractWrapper)){const a=await this.contractWrapper.read("claimCondition",[t]);return(0,W.x)(a)}if(this.isNewMultiphaseDrop(this.contractWrapper)){const r=void 0!==a?a:await this.contractWrapper.read("getActiveClaimConditionId",[t]),e=await this.contractWrapper.read("getClaimConditionById",[t,r]);return(0,W.x)(e)}throw new Error("Contract does not support claim conditions")}async getAll(t,a){if(this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){const r=await this.contractWrapper.read("claimCondition",[t]),e=r.currentStartId.toNumber(),i=r.count.toNumber(),n=[];for(let a=e;a<e+i;a++)n.push(await this.get(t,a));const s=await this.metadata.get();return Promise.all(n.map((t=>(0,W.v)(t,0,this.contractWrapper.getProvider(),s.merkle,this.storage,(null===a||void 0===a?void 0:a.withAllowList)||!1))))}return[await this.getActive(t,a)]}async canClaim(t,a,r){return r&&(r=await(0,p.aP)(r)),0===(await this.getClaimIneligibilityReasons(t,a,r)).length}async getClaimIneligibilityReasons(t,a,e){const i=[];let c,l;if(void 0===e)try{e=await this.contractWrapper.getSignerAddress()}catch(w){console.warn("failed to get signer address",w)}if(!e)return[W.C.NoWallet];const h=await(0,p.aP)(e);try{l=await this.getActive(t)}catch(w){return(0,p.B)(w,"!CONDITION")||(0,p.B)(w,"no active mint condition")?(i.push(W.C.NoClaimConditionSet),i):(i.push(W.C.Unknown),i)}if("unlimited"!==l.availableSupply&&s.O$.from(l.availableSupply).lt(a))return i.push(W.C.NotEnoughSupply),i;const d=n.stripZeros(l.merkleRootHash).length>0;let u=null;if(d){if(u=await this.getClaimerProofs(t,h),!u&&(this.isLegacySinglePhaseDrop(this.contractWrapper)||this.isLegacyMultiPhaseDrop(this.contractWrapper)))return i.push(W.C.AddressNotAllowed),i;if(u)try{const r=await this.prepareClaim(t,a,!1,h);let e;if(this.isLegacyMultiPhaseDrop(this.contractWrapper)){if(c=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[e]=await this.contractWrapper.read("verifyClaimMerkleProof",[c,h,t,a,r.proofs,r.maxClaimable]),!e)return i.push(W.C.AddressNotAllowed),i}else if(this.isLegacySinglePhaseDrop(this.contractWrapper)){if([e]=await this.contractWrapper.read("verifyClaimMerkleProof",[t,h,a,{proof:r.proofs,maxQuantityInAllowlist:r.maxClaimable}]),!e)return i.push(W.C.AddressNotAllowed),i}else this.isNewSinglePhaseDrop(this.contractWrapper)?await this.contractWrapper.read("verifyClaim",[t,h,a,r.currencyAddress,r.price,{proof:r.proofs,quantityLimitPerWallet:r.maxClaimable,currency:r.currencyAddressInProof,pricePerToken:r.priceInProof}]):this.isNewMultiphaseDrop(this.contractWrapper)&&(c=await this.contractWrapper.read("getActiveClaimConditionId",[t]),await this.contractWrapper.read("verifyClaim",[c,h,t,a,r.currencyAddress,r.price,{proof:r.proofs,quantityLimitPerWallet:r.maxClaimable,currency:r.currencyAddressInProof,pricePerToken:r.priceInProof}]))}catch(f){console.warn("Merkle proof verification failed:","reason"in f?f.reason:f);switch(f.reason){case"!Qty":i.push(W.C.OverMaxClaimablePerWallet);break;case"!PriceOrCurrency":i.push(W.C.WrongPriceOrCurrency);break;case"!MaxSupply":i.push(W.C.NotEnoughSupply);break;case"cant claim yet":i.push(W.C.ClaimPhaseNotStarted);break;default:i.push(W.C.AddressNotAllowed)}return i}}if(this.isNewSinglePhaseDrop(this.contractWrapper)||this.isNewMultiphaseDrop(this.contractWrapper)){let r=s.O$.from(0),e=(0,W.y)(l.maxClaimablePerWallet,0);try{r=await this.getSupplyClaimedByWallet(t,h)}catch(f){}if(u&&(e=(0,W.y)(u.maxClaimable,0)),e.gt(0)&&e.lt(r.add(a)))return i.push(W.C.OverMaxClaimablePerWallet),i;if((!d||d&&!u)&&(e.lte(r)||e.eq(0)))return i.push(W.C.AddressNotAllowed),i}let[m,g]=[s.O$.from(0),s.O$.from(0)];this.isLegacyMultiPhaseDrop(this.contractWrapper)?(c=await this.contractWrapper.read("getActiveClaimConditionId",[t]),[m,g]=await this.contractWrapper.read("getClaimTimestamp",[t,c,h])):this.isLegacySinglePhaseDrop(this.contractWrapper)&&([m,g]=await this.contractWrapper.read("getClaimTimestamp",[t,h]));const y=s.O$.from(Date.now()).div(1e3);if(m.gt(0)&&y.lt(g))return g.eq(o.Bz)?i.push(W.C.AlreadyClaimed):i.push(W.C.WaitBeforeNextClaimTransaction),i;if(l.price.gt(0)&&(0,p.d7)()){const t=l.price.mul(a),e=this.contractWrapper.getProvider();if((0,C.i)(l.currencyAddress)){(await e.getBalance(h)).lt(t)&&i.push(W.C.NotEnoughTokens)}else{const a=(await Promise.resolve().then(r.t.bind(r,9242,19))).default,n=new p.cu(e,l.currencyAddress,a,{},this.storage);(await n.read("balanceOf",[h])).lt(t)&&i.push(W.C.NotEnoughTokens)}}return i}async getClaimerProofs(t,a,r){const e=(await this.get(t,r)).merkleRoot;if(n.stripZeros(e).length>0){const t=await this.metadata.get(),r=await(0,p.aP)(a);return await(0,W.f)(r,e.toString(),t.merkle,this.contractWrapper.getProvider(),this.storage,this.getSnapshotFormatVersion())}return null}async getSupplyClaimedByWallet(t,a){const r=await(0,p.aP)(a);if(this.isNewSinglePhaseDrop(this.contractWrapper))return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,r]);if(this.isNewMultiphaseDrop(this.contractWrapper)){const a=await this.contractWrapper.read("getActiveClaimConditionId",[t]);return await this.contractWrapper.read("getSupplyClaimedByWallet",[t,a,r])}throw new Error("This contract does not support the getSupplyClaimedByWallet function")}async prepareClaim(t,a,r,e){const i=await(0,p.aP)(e||await this.contractWrapper.getSignerAddress());return(0,W.z)(i,a,await this.getActive(t),(async()=>(await this.metadata.get()).merkle),0,this.contractWrapper,this.storage,r,this.getSnapshotFormatVersion())}async getClaimArguments(t,a,r,e){const i=await(0,p.aP)(a);return this.isLegacyMultiPhaseDrop(this.contractWrapper)?[i,t,r,e.currencyAddress,e.price,e.proofs,e.maxClaimable]:this.isLegacySinglePhaseDrop(this.contractWrapper)?[i,t,r,e.currencyAddress,e.price,{proof:e.proofs,maxQuantityInAllowlist:e.maxClaimable},c.Y0("")]:[i,t,r,e.currencyAddress,e.price,{proof:e.proofs,quantityLimitPerWallet:e.maxClaimable,pricePerToken:e.priceInProof,currency:e.currencyAddressInProof},c.Y0("")]}async getClaimTransaction(t,a,r,e){if(null!==e&&void 0!==e&&e.pricePerToken)throw new Error("Price per token should be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");const i=await this.prepareClaim(a,r,(null===e||void 0===e?void 0:e.checkERC20Allowance)||!0);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:await this.getClaimArguments(a,t,r,i),overrides:i.overrides})}isNewSinglePhaseDrop(t){return(0,h.d)(t,"ERC1155ClaimConditionsV2")}isNewMultiphaseDrop(t){return(0,h.d)(t,"ERC1155ClaimPhasesV2")}isLegacySinglePhaseDrop(t){return(0,h.d)(t,"ERC1155ClaimConditionsV1")}isLegacyMultiPhaseDrop(t){return(0,h.d)(t,"ERC1155ClaimPhasesV1")}getSnapshotFormatVersion(){return this.isLegacyMultiPhaseDrop(this.contractWrapper)||this.isLegacySinglePhaseDrop(this.contractWrapper)?W.A.V1:W.A.V2}}class T{constructor(t,a,r){(0,e.Z)(this,"featureName",p.d8.name),(0,e.Z)(this,"to",(0,u.c)((async(t,a)=>{const r=a.map((t=>t.metadata)),e=a.map((t=>t.supply)),i=await(0,d.u)(r,this.storage),n=await(0,p.aP)(t),s=new C.C(this.contractWrapper),c=await Promise.all(i.map((async(t,a)=>s.encode("mintTo",[n,o.Bz,t,e[a]]))));return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[c],parse:t=>{const a=this.contractWrapper.parseLogs("TokensMinted",t.logs);if(0===a.length||a.length<r.length)throw new Error("TokenMinted event not found, minting failed");return a.map((a=>{const r=a.args.tokenIdMinted;return{id:r,receipt:t,data:()=>this.erc1155.get(r)}}))}})}))),this.erc1155=t,this.contractWrapper=a,this.storage=r}}class S{constructor(t){(0,e.Z)(this,"featureName",p.d9.name),(0,e.Z)(this,"tokens",(0,u.c)((async(t,a)=>{const r=await this.contractWrapper.getSignerAddress();return this.from.prepare(r,t,a)}))),(0,e.Z)(this,"from",(0,u.c)((async(t,a,r)=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burn",args:[await(0,p.aP)(t),a,r]})))),(0,e.Z)(this,"batch",(0,u.c)((async(t,a)=>{const r=await this.contractWrapper.getSignerAddress();return this.batchFrom.prepare(r,t,a)}))),(0,e.Z)(this,"batchFrom",(0,u.c)((async(t,a,r)=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"burnBatch",args:[await(0,p.aP)(t),a,r]})))),this.contractWrapper=t}}class k{constructor(t,a){(0,e.Z)(this,"featureName",p.da.name),this.erc1155=t,this.contractWrapper=a}async all(t){const a=s.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),r=s.O$.from((null===t||void 0===t?void 0:t.count)||d.D).toNumber(),e=Math.min((await this.totalCount()).toNumber(),a+r);return await Promise.all([...Array(e-a).keys()].map((t=>this.erc1155.get((a+t).toString()))))}async totalCount(){return await this.contractWrapper.read("nextTokenIdToMint",[])}async totalCirculatingSupply(t){return await this.contractWrapper.read("totalSupply",[t])}async owned(t,a){const[r,e]=await Promise.all([(0,p.aP)(t||await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("nextTokenIdToMint",[])]);let i=(await this.contractWrapper.read("balanceOfBatch",[Array(e.toNumber()).fill(r),Array.from(Array(e.toNumber()).keys())])).map(((t,a)=>({tokenId:a,balance:t}))).filter((t=>t.balance.gt(0)));if(a){const t=(null===a||void 0===a?void 0:a.start)||0,r=(null===a||void 0===a?void 0:a.count)||d.D;i=i.slice(t,t+r)}return(await Promise.all(i.map((t=>this.erc1155.get(t.tokenId.toString()))))).map(((t,a)=>({...t,owner:r,quantityOwned:i[a].balance.toString()})))}}class A{constructor(t,a,r){(0,e.Z)(this,"featureName",p.db.name),(0,e.Z)(this,"lazyMint",(0,u.c)((async(t,a)=>{const r=await this.erc1155.nextTokenIdToMint(),e=await(0,d.u)(t,this.storage,r.toNumber(),a),i=e[0].substring(0,e[0].lastIndexOf("/"));for(let o=0;o<e.length;o++){const t=e[o].substring(0,e[o].lastIndexOf("/"));if(i!==t)throw new Error("Can only create batches with the same base URI for every entry in the batch. Expected '".concat(i,"' but got '").concat(t,"'"))}const n=t=>{const a=this.contractWrapper.parseLogs("TokensLazyMinted",null===t||void 0===t?void 0:t.logs),r=a[0].args.startTokenId,e=a[0].args.endTokenId,i=[];for(let n=r;n.lte(e);n=n.add(1))i.push({id:n,receipt:t,data:()=>this.erc1155.getTokenMetadata(n)});return i},s=await(0,p.dd)(this.contractWrapper.address,this.contractWrapper.getProvider());return this.isLegacyEditionDropContract(this.contractWrapper,s)?u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,"".concat(i.endsWith("/")?i:"".concat(i,"/"))],parse:n}):u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"lazyMint",args:[e.length,"".concat(i.endsWith("/")?i:"".concat(i,"/")),c.Y0("")],parse:n})}))),this.erc1155=t,this.contractWrapper=a,this.storage=r,this.revealer=this.detectErc1155Revealable()}detectErc1155Revealable(){if((0,h.d)(this.contractWrapper,"ERC1155Revealable"))return new g.D(this.contractWrapper,this.storage,p.dc.name,(()=>this.erc1155.nextTokenIdToMint()))}isLegacyEditionDropContract(t,a){return a&&"DropERC1155"===a.type&&a.version<3||!1}}class E{constructor(t,a,r){(0,e.Z)(this,"featureName",p.de.name),(0,e.Z)(this,"to",(0,u.c)((async(t,a)=>{const r=await this.getMintTransaction(t,a);return r.setParse((t=>{const a=this.contractWrapper.parseLogs("TransferSingle",null===t||void 0===t?void 0:t.logs);if(0===a.length)throw new Error("TransferSingleEvent event not found");const r=a[0].args.id;return{id:r,receipt:t,data:()=>this.erc1155.get(r.toString())}})),r}))),(0,e.Z)(this,"additionalSupplyTo",(0,u.c)((async(t,a,r)=>{const e=await this.erc1155.getTokenMetadata(a);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await(0,p.aP)(t),a,e.uri,r],parse:t=>({id:s.O$.from(a),receipt:t,data:()=>this.erc1155.get(a)})})}))),this.erc1155=t,this.contractWrapper=a,this.storage=r,this.batch=this.detectErc1155BatchMintable()}async getMintTransaction(t,a){const r=await(0,d.b)(a.metadata,this.storage);return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintTo",args:[await(0,p.aP)(t),o.Bz,r,a.supply]})}detectErc1155BatchMintable(){if((0,h.d)(this.contractWrapper,"ERC1155BatchMintable"))return new T(this.erc1155,this.contractWrapper,this.storage)}}const M=(()=>m.z.object({address:p.bd,quantity:p.cz.default(1)}))(),I=(()=>m.z.union([m.z.array(m.z.string()).transform((async t=>await Promise.all(t.map((t=>M.parseAsync({address:t})))))),m.z.array(M)]))();class N{constructor(t){(0,e.Z)(this,"featureName",p.df.name),(0,e.Z)(this,"to",(0,u.c)((async(t,a,r,e)=>await this.getClaimTransaction(t,a,r,e)))),this.contractWrapper=t}async getClaimTransaction(t,a,r,e){let i={};return e&&e.pricePerToken&&(i=await(0,g.c)(this.contractWrapper,e.pricePerToken,r,e.currencyAddress,e.checkERC20Allowance)),u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"claim",args:[await(0,p.aP)(t),a,r],overrides:i})}}class x{constructor(t,a){(0,e.Z)(this,"featureName",p.dg.name),(0,e.Z)(this,"to",(0,u.c)((async(t,a,r,e)=>await this.conditions.getClaimTransaction(t,a,r,e)))),this.contractWrapper=t,this.storage=a;const r=new h.C(this.contractWrapper,p.bk,this.storage);this.conditions=new P(t,r,this.storage)}}class D{constructor(t,a,r){(0,e.Z)(this,"featureName",p.dh.name),(0,e.Z)(this,"mint",(0,u.c)((async t=>{const a=t.payload,r=t.signature,[e,i]=await Promise.all([this.mapPayloadToContractStruct(a),this.contractWrapper.getCallOverrides()]);return await(0,v.s)(this.contractWrapper,e.pricePerToken.mul(e.quantity),a.currencyAddress,i),u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"mintWithSignature",args:[e,r],overrides:i,parse:t=>{const a=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===a.length)throw new Error("No MintWithSignature event found");return{id:a[0].args.tokenIdMinted,receipt:t}}})}))),(0,e.Z)(this,"mintBatch",(0,u.c)((async t=>{const a=await Promise.all(t.map((t=>this.mapPayloadToContractStruct(t.payload)))),r=t.map(((t,r)=>{const e=a[r],i=t.signature,n=t.payload.price;if(s.O$.from(n).gt(0))throw new Error("Can only batch free mints. For mints with a price, use regular mint()");return{message:e,signature:i}})),e=new C.C(this.contractWrapper),i=r.map((t=>e.encode("mintWithSignature",[t.message,t.signature])));if((0,h.h)("multicall",this.contractWrapper))return u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[i],parse:t=>{const a=this.contractWrapper.parseLogs("TokensMintedWithSignature",t.logs);if(0===a.length)throw new Error("No MintWithSignature event found");return a.map((a=>({id:a.args.tokenIdMinted,receipt:t})))}});throw new Error("Multicall not supported on this contract!")}))),this.contractWrapper=t,this.storage=a,this.roles=r}async verify(t){const a=t.payload,r=t.signature,e=await this.mapPayloadToContractStruct(a);return(await this.contractWrapper.read("verify",[e,r]))[0]}async generate(t){const a={...t,tokenId:o.Bz};return this.generateFromTokenId(a)}async generateFromTokenId(t){return(await this.generateBatchFromTokenIds([t]))[0]}async generateBatch(t){const a=t.map((t=>({...t,tokenId:o.Bz})));return this.generateBatchFromTokenIds(a)}async generateBatchFromTokenIds(t){var a;const r=this.contractWrapper.getSigner();(0,f.Z)(r,"No signer available"),await(null===(a=this.roles)||void 0===a?void 0:a.verify(["minter"],await r.getAddress()));const e=await Promise.all(t.map((t=>W.o.parseAsync(t)))),i=e.map((t=>t.metadata)),[n,s,o]=await Promise.all([(0,d.u)(i,this.storage),this.contractWrapper.getChainID(),(0,p.dd)(this.contractWrapper.address,this.contractWrapper.getProvider())]),c=await Promise.all(e.map(((t,a)=>W.p.parseAsync({...t,uri:n[a]})))),l=await Promise.all(c.map((t=>this.mapPayloadToContractStruct(t)))),h="TokenERC1155"===(null===o||void 0===o?void 0:o.type);return(await Promise.all(l.map((t=>this.contractWrapper.signTypedData(r,{name:h?"TokenERC1155":"SignatureMintERC1155",version:"1",chainId:s,verifyingContract:this.contractWrapper.address},{MintRequest:W.t},t))))).map(((t,a)=>({payload:c[a],signature:t.toString()})))}async mapPayloadToContractStruct(t){const a=await(0,b.n)(this.contractWrapper.getProvider(),t.price,t.currencyAddress);return{to:t.to,tokenId:t.tokenId,uri:t.uri,quantity:t.quantity,pricePerToken:a,currency:t.currencyAddress,validityStartTimestamp:t.mintStartTime,validityEndTimestamp:t.mintEndTime,uid:t.uid,royaltyRecipient:t.royaltyRecipient,royaltyBps:t.royaltyBps,primarySaleRecipient:t.primarySaleRecipient}}}class Z{get chainId(){return this._chainId}constructor(t,a,r){(0,e.Z)(this,"featureName",p.di.name),(0,e.Z)(this,"transfer",(0,u.c)((()=>{var t=this;return async function(a,r,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];const n=await t.contractWrapper.getSignerAddress();return u.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[n,await(0,p.aP)(a),r,e,i]})}})())),(0,e.Z)(this,"transferFrom",(0,u.c)((()=>{var t=this;return async function(a,r,e,i){let n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[0];return u.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"safeTransferFrom",args:[await(0,p.aP)(a),await(0,p.aP)(r),e,i,n]})}})())),(0,e.Z)(this,"setApprovalForAll",(0,u.c)((async(t,a)=>u.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setApprovalForAll",args:[t,a]})))),(0,e.Z)(this,"airdrop",(0,u.c)((()=>{var t=this;return async function(a,r,e){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[0];const n=e?await(0,p.aP)(e):await t.contractWrapper.getSignerAddress(),o=await t.balanceOf(n,a),c=await I.parseAsync(r),l=c.reduce(((t,a)=>s.O$.from(t).add(s.O$.from((null===a||void 0===a?void 0:a.quantity)||1))),s.O$.from(0));if(o.lt(s.O$.from(l)))throw new Error("The caller owns ".concat(o.toString()," NFTs, but wants to airdrop ").concat(l.toString()," NFTs."));const h=new C.C(t.contractWrapper),d=c.map((t=>{let{address:r,quantity:e}=t;return h.encode("safeTransferFrom",[n,r,a,e,i])}));return u.T.fromContractWrapper({contractWrapper:t.contractWrapper,method:"multicall",args:[d]})}})())),(0,e.Z)(this,"mint",(0,u.c)((async t=>this.mintTo.prepare(await this.contractWrapper.getSignerAddress(),t)))),(0,e.Z)(this,"mintTo",(0,u.c)((async(t,a)=>(0,l.a)(this.mintable,p.de).to.prepare(t,a)))),(0,e.Z)(this,"mintAdditionalSupply",(0,u.c)((async(t,a)=>(0,l.a)(this.mintable,p.de).additionalSupplyTo.prepare(await this.contractWrapper.getSignerAddress(),t,a)))),(0,e.Z)(this,"mintAdditionalSupplyTo",(0,u.c)((async(t,a,r)=>(0,l.a)(this.mintable,p.de).additionalSupplyTo.prepare(t,a,r)))),(0,e.Z)(this,"mintBatch",(0,u.c)((async t=>this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(),t)))),(0,e.Z)(this,"mintBatchTo",(0,u.c)((async(t,a)=>{var r;return(0,l.a)(null===(r=this.mintable)||void 0===r?void 0:r.batch,p.d8).to.prepare(t,a)}))),(0,e.Z)(this,"burn",(0,u.c)((async(t,a)=>(0,l.a)(this.burnable,p.d9).tokens.prepare(t,a)))),(0,e.Z)(this,"burnFrom",(0,u.c)((async(t,a,r)=>(0,l.a)(this.burnable,p.d9).from.prepare(t,a,r)))),(0,e.Z)(this,"burnBatch",(0,u.c)((async(t,a)=>(0,l.a)(this.burnable,p.d9).batch.prepare(t,a)))),(0,e.Z)(this,"burnBatchFrom",(0,u.c)((async(t,a,r)=>(0,l.a)(this.burnable,p.d9).batchFrom.prepare(t,a,r)))),(0,e.Z)(this,"lazyMint",(0,u.c)((async(t,a)=>(0,l.a)(this.lazyMintable,p.db).lazyMint.prepare(t,a)))),(0,e.Z)(this,"claim",(0,u.c)((async(t,a,r)=>this.claimTo.prepare(await this.contractWrapper.getSignerAddress(),t,a,r)))),(0,e.Z)(this,"claimTo",(0,u.c)((async(t,a,r,e)=>{const i=this.claimWithConditions,n=this.claimCustom;if(i)return i.to.prepare(t,a,r,e);if(n)return n.to.prepare(t,a,r,e);throw new p.x(p.df)}))),this.contractWrapper=t,this.storage=a,this.query=this.detectErc1155Enumerable(),this.mintable=this.detectErc1155Mintable(),this.burnable=this.detectErc1155Burnable(),this.lazyMintable=this.detectErc1155LazyMintable(),this.signatureMintable=this.detectErc1155SignatureMintable(),this.claimCustom=this.detectErc1155Claimable(),this.claimWithConditions=this.detectErc1155ClaimableWithConditions(),this._chainId=r}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const[a,r]=await Promise.all([this.contractWrapper.read("totalSupply",[t]).catch((()=>s.O$.from(0))),this.getTokenMetadata(t).catch((()=>({id:t.toString(),uri:"",...d.F})))]);return{owner:i.d,metadata:r,type:"ERC1155",supply:a.toString()}}async totalSupply(t){if((0,h.d)(this.contractWrapper,"ERC1155Supply"))return await this.contractWrapper.read("totalSupply",[t]);throw new p.x(p.dj)}async balanceOf(t,a){return await this.contractWrapper.read("balanceOf",[await(0,p.aP)(t),a])}async balance(t){return await this.balanceOf(await this.contractWrapper.getSignerAddress(),t)}async isApproved(t,a){return await this.contractWrapper.read("isApprovedForAll",[await(0,p.aP)(t),await(0,p.aP)(a)])}async nextTokenIdToMint(){if((0,h.h)("nextTokenIdToMint",this.contractWrapper))return await this.contractWrapper.read("nextTokenIdToMint",[]);throw new Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint")}async getAll(t){return(0,l.a)(this.query,p.da).all(t)}async totalCount(){return(0,l.a)(this.query,p.da).totalCount()}async totalCirculatingSupply(t){return(0,l.a)(this.query,p.da).totalCirculatingSupply(t)}async getOwned(t,a){return t&&(t=await(0,p.aP)(t)),(0,l.a)(this.query,p.da).owned(t,a)}async getMintTransaction(t,a){return(0,l.a)(this.mintable,p.de).getMintTransaction(t,a)}async getClaimTransaction(t,a,r,e){const i=this.claimWithConditions,n=this.claimCustom;if(i)return i.conditions.getClaimTransaction(t,a,r,e);if(n)return n.getClaimTransaction(t,a,r,e);throw new p.x(p.df)}get claimConditions(){return(0,l.a)(this.claimWithConditions,p.dg).conditions}get signature(){return(0,l.a)(this.signatureMintable,p.dh)}get revealer(){var t;return(0,l.a)(null===(t=this.lazyMintable)||void 0===t?void 0:t.revealer,p.dc)}async getTokenMetadata(t){const a=await this.contractWrapper.read("uri",[t]);if(!a)throw new p.n;return(0,d.f)(t,a,this.storage)}detectErc1155Enumerable(){if((0,h.d)(this.contractWrapper,"ERC1155Enumerable"))return new k(this,this.contractWrapper)}detectErc1155Mintable(){if((0,h.d)(this.contractWrapper,"ERC1155Mintable"))return new E(this,this.contractWrapper,this.storage)}detectErc1155Burnable(){if((0,h.d)(this.contractWrapper,"ERC1155Burnable"))return new S(this.contractWrapper)}detectErc1155LazyMintable(){if((0,h.d)(this.contractWrapper,"ERC1155LazyMintableV1")||(0,h.d)(this.contractWrapper,"ERC1155LazyMintableV2"))return new A(this,this.contractWrapper,this.storage)}detectErc1155SignatureMintable(){if((0,h.d)(this.contractWrapper,"ERC1155SignatureMintable"))return new D(this.contractWrapper,this.storage)}detectErc1155Claimable(){if((0,h.d)(this.contractWrapper,"ERC1155ClaimCustom"))return new N(this.contractWrapper)}detectErc1155ClaimableWithConditions(){if((0,h.d)(this.contractWrapper,"ERC1155ClaimConditionsV1")||(0,h.d)(this.contractWrapper,"ERC1155ClaimConditionsV2")||(0,h.d)(this.contractWrapper,"ERC1155ClaimPhasesV1")||(0,h.d)(this.contractWrapper,"ERC1155ClaimPhasesV2"))return new x(this.contractWrapper,this.storage)}}}}]);
//# sourceMappingURL=297.e352fe7b.chunk.js.map
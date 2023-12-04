import React, {useEffect} from 'react';
import './App.css';
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { Select, Row, Col, Button } from 'antd';

function App() {

    const [smartContractAddress, setSmartContractAddress] = React.useState('0x70f52c78798f404eaf25cbd12638c68f611d3214');
    const [roles, setRoles] = React.useState<any>([]);
  const sdk = new ThirdwebSDK("binance", {
    clientId: process.env.REACT_APP_THIRDWEB_CLIENT_ID,
  });


  useEffect(() => {
    loadPermissions(smartContractAddress);
  }, []);

  const loadPermissions = async (address: string) => {
      const contract = await sdk.getContract(smartContractAddress);

      try {
          const roles = await contract.roles.getAll();
          setRoles(roles);

      } catch (e) {
            console.log(e);
            try {
                const owner = await contract.call('owner');
                console.log(owner);
                setRoles({owner: [owner]});
            } catch (e) {
                console.log(e);
                setRoles({});
            }
      }
  }


  const onChange = (value: string) => {
    console.log(`selected ${value}`);
    setSmartContractAddress(value);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

// Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <div className="App">
          <Row>
              <Col span={4}>
                  <p>Network: </p>
                  {/*<Select*/}
                  {/*    showSearch*/}
                  {/*    placeholder="Select a person"*/}
                  {/*    optionFilterProp="children"*/}
                  {/*    onChange={onChange}*/}
                  {/*    onSearch={onSearch}*/}
                  {/*    filterOption={filterOption}*/}
                  {/*    defaultValue={'binance-testnet'}*/}
                  {/*    options={[*/}
                  {/*        {*/}
                  {/*            value: 'binance',*/}
                  {/*            label: 'BSC mainnet',*/}
                  {/*        },*/}
                  {/*        {*/}
                  {/*            value: 'binance-testnet',*/}
                  {/*            label: 'BSC testnet',*/}
                  {/*        },*/}
                  {/*    ]}*/}
                  {/*/>*/}
                  <p>BSC mainnet</p>
              </Col>
              <Col span={16}>
                  <p>Contract: </p>
                  <Select
                      showSearch
                      placeholder="Select a person"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      value={smartContractAddress}
                      options={[
                          {
                              value: '0xa28C6f6B157be29Fc6532d8335B41D8046DF2E77',
                              label: 'BIC',
                          },
                          {
                              value: '0xF328218dCb94B692e380396d37E7E4C315fa30d4',
                              label: 'BIR',
                          },
                          {
                              value: '0x70f52c78798f404eaf25cbd12638c68f611d3214',
                              label: 'BGT',
                          },
                          {
                              value: '0x7910f4FcCa2FAe71147Df3Ac62EeBf2c7b6CF05f',
                              label: 'Whitelist',
                          },
                          {
                              value: '0x5fb9e93b8474262b30d43d7a640bf256c1f4f5a9',
                              label: 'Private sale',
                          },
                      ]}
                  />
              </Col>
              <Col span={4}><Button onClick={() => loadPermissions(smartContractAddress)}>Reload</Button></Col>
              {/*<Col span={4}><Button>Connect wallet</Button></Col>*/}
          </Row>
        {Object.keys(roles).map((role: any) => {
            if(roles[role].length > 0) {
                return (
                    <div>
                        <p>{role}</p>
                        <ul>
                            {roles[role].map((address: any) => {
                                return (
                                    <li>{address}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            }
        })}
          <Row>
          </Row>
    </div>
  );
}

export default App;

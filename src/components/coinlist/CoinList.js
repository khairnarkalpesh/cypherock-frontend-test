import React, { useState, useEffect } from 'react'
import './coinlist.css'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ToggleOnOutlinedIcon from '@mui/icons-material/ToggleOnOutlined';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function CoinList() {

  const data = [{id: 0, label: "Amount High - Low"}, {id: 1, label: "Amount Low - High"}, {id: 1, label: "Arrange A-Z"}, {id: 3, label: "Arrange Z-A"}];

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  }



  return (
      <>
        <div className="row">

          <div className='top-wrapper'>
            <i className='toggle'><CheckCircleOutlineIcon/></i>
            <span style={{color:"#F5CEA3"}}>Synchronized</span> <span className='toggle'>|</span>
            <i className='toggle'><ToggleOnOutlinedIcon/></i>
          </div>

          <div className='top-wrapper'>
          <input class="input-simple" type="text" placeholder="Search Your Coin." />
          <div className='add-delete'>
            <button><AddIcon className='icons'/> ADD</button>
            <div>|</div>
            <button><DeleteOutlineIcon className='icons'/>DELETE</button>
          </div>
        </div>

        <div className='wallet'>
          <h3>Wallet 1</h3>
          <div className='total-coins'>
            <div><span>Total Coins - 7</span></div>
            <div className='dropdown'>
              <div className='dropdown-header' onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id == selectedItem).label : "Amount High - Low"}
                <ArrowDropDownIcon className={`icon ${isOpen && "open"}`}/><i ></i>
              </div>
              <div className={`dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                  <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                    <span className={`dropdown-item-dot ${item.id == selectedItem && 'selected'}`}>• </span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="tbl-header">
            <table cellpadding="0" cellspacing="0" border="0">
              <thead>
                <tr>
                  <th>Coin</th>
                  <th>Holding</th>
                  <th>Value</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th></th> 
                </tr>
              </thead>
            </table>
          </div>
          <div className="tbl-content">
            <table cellpadding="0" cellspacing="0" border="0">
              <tbody>
              <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>

                <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>

                <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>

                <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>

                <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>

                <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>

                <tr>
                  <td><i className='coin-icon'><CurrencyBitcoinIcon  style={{fontSize:"20px"}}/></i> <span>BITCOIN</span></td>
                  <td>BTC 0.00256</td>
                  <td>$ 0.5268</td>
                  <td>$ 1.2586</td>
                  <td className='action'><i><ArrowBackIcon className='action-receive'/></i><span>RECEIVE</span></td>
                  <td className='action-2'><i><ArrowBackIcon className='action-send'/></i><span>SEND</span></td>
                </tr>
                      
              </tbody>
            </table>
          </div>        
        </div>

      </>
    )
}

export default CoinList
const {

  isTxWithCfxAddress, isTxWithHexAddress,
  isTxReceiptWithCfxAddress, isTxReceiptWithHexAddress,
  isErrorUndefined
} = require('./assert');
const { asyncSend, asyncSendWithHexAddrRes } = require("./index")
const { describe, it } = require("mocha");
// const { assert } = require('chai');


const txHash = '0x439b6df80114519fd0f201b2da788b07cd8b598a3b38242b0c9e277bd7c99c44';
// const txHash = '0x46112be645b94b8179d6f71d83a0b167c91107be7aa295de87e8e2b09f5c51b7'
const blockHash = '0xaab4388b7416753a052f08976e8444b6bec298d068271873f66a1d19a4ee0705'
const blockNumber = '0x1032c52'


describe('Transaction', function () {
  describe('getTransactionByHash', function () {
    it('should return tx with cfx address response', async function () {
      let { result, error } = await asyncSend('eth_getTransactionByHash', txHash);
      isErrorUndefined(error)
      isTxWithCfxAddress(result)
    });

    it('should return tx with hex address response', async function () {
      let { result, error } = await asyncSendWithHexAddrRes('eth_getTransactionByHash', txHash);
      isErrorUndefined(error)
      isTxWithHexAddress(result)
    });
  });

  describe('getTransactionReceipt', function () {
    it('should return receipt with cfx address response', async function () {
      let { result, error } = await asyncSend('eth_getTransactionReceipt', txHash);
      isErrorUndefined(error)
      isTxReceiptWithCfxAddress(result)
    });

    it('should return receipt with hex address response', async function () {
      let { result, error } = await asyncSendWithHexAddrRes('eth_getTransactionReceipt', txHash);
      isErrorUndefined(error)
      isTxReceiptWithHexAddress(result)
    });
  });

  describe('getTransactionByBlockHashAndIndex', function () {
    it('should return tx', async function () {
      let { result, error } = await asyncSend('eth_getTransactionByBlockHashAndIndex', blockHash, 0);
      isErrorUndefined(error)
      isTxWithCfxAddress(result)
    });
  });

  describe('getTransactionByBlockNumberAndIndex', function () {
    it('should return tx', async function () {
      let { result, error } = await asyncSend('eth_getTransactionByBlockNumberAndIndex', blockNumber, 0);
      isErrorUndefined(error)
      isTxWithCfxAddress(result)
    });
  });

  // missing test
  // sendTx
  // sendRawTx
  // subscribe
});


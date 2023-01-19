import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  DataFeedFunded,
  NewDataFeed,
  OneTimeTipClaimed,
  TipAdded,
  TipClaimed
} from "../generated/Contract/Contract"

export function createDataFeedFundedEvent(
  _queryId: Bytes,
  _feedId: Bytes,
  _amount: BigInt,
  _feedFunder: Address,
  _feedDetails: ethereum.Tuple
): DataFeedFunded {
  let dataFeedFundedEvent = changetype<DataFeedFunded>(newMockEvent())

  dataFeedFundedEvent.parameters = new Array()

  dataFeedFundedEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  dataFeedFundedEvent.parameters.push(
    new ethereum.EventParam("_feedId", ethereum.Value.fromFixedBytes(_feedId))
  )
  dataFeedFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  dataFeedFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_feedFunder",
      ethereum.Value.fromAddress(_feedFunder)
    )
  )
  dataFeedFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_feedDetails",
      ethereum.Value.fromTuple(_feedDetails)
    )
  )

  return dataFeedFundedEvent
}

export function createNewDataFeedEvent(
  _queryId: Bytes,
  _feedId: Bytes,
  _queryData: Bytes,
  _feedCreator: Address
): NewDataFeed {
  let newDataFeedEvent = changetype<NewDataFeed>(newMockEvent())

  newDataFeedEvent.parameters = new Array()

  newDataFeedEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  newDataFeedEvent.parameters.push(
    new ethereum.EventParam("_feedId", ethereum.Value.fromFixedBytes(_feedId))
  )
  newDataFeedEvent.parameters.push(
    new ethereum.EventParam("_queryData", ethereum.Value.fromBytes(_queryData))
  )
  newDataFeedEvent.parameters.push(
    new ethereum.EventParam(
      "_feedCreator",
      ethereum.Value.fromAddress(_feedCreator)
    )
  )

  return newDataFeedEvent
}

export function createOneTimeTipClaimedEvent(
  _queryId: Bytes,
  _amount: BigInt,
  _reporter: Address
): OneTimeTipClaimed {
  let oneTimeTipClaimedEvent = changetype<OneTimeTipClaimed>(newMockEvent())

  oneTimeTipClaimedEvent.parameters = new Array()

  oneTimeTipClaimedEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  oneTimeTipClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  oneTimeTipClaimedEvent.parameters.push(
    new ethereum.EventParam("_reporter", ethereum.Value.fromAddress(_reporter))
  )

  return oneTimeTipClaimedEvent
}

export function createTipAddedEvent(
  _queryId: Bytes,
  _amount: BigInt,
  _queryData: Bytes,
  _tipper: Address
): TipAdded {
  let tipAddedEvent = changetype<TipAdded>(newMockEvent())

  tipAddedEvent.parameters = new Array()

  tipAddedEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  tipAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  tipAddedEvent.parameters.push(
    new ethereum.EventParam("_queryData", ethereum.Value.fromBytes(_queryData))
  )
  tipAddedEvent.parameters.push(
    new ethereum.EventParam("_tipper", ethereum.Value.fromAddress(_tipper))
  )

  return tipAddedEvent
}

export function createTipClaimedEvent(
  _feedId: Bytes,
  _queryId: Bytes,
  _amount: BigInt,
  _reporter: Address
): TipClaimed {
  let tipClaimedEvent = changetype<TipClaimed>(newMockEvent())

  tipClaimedEvent.parameters = new Array()

  tipClaimedEvent.parameters.push(
    new ethereum.EventParam("_feedId", ethereum.Value.fromFixedBytes(_feedId))
  )
  tipClaimedEvent.parameters.push(
    new ethereum.EventParam("_queryId", ethereum.Value.fromFixedBytes(_queryId))
  )
  tipClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  tipClaimedEvent.parameters.push(
    new ethereum.EventParam("_reporter", ethereum.Value.fromAddress(_reporter))
  )

  return tipClaimedEvent
}

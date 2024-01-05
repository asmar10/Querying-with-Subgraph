import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  Deposit,
  EmergencyWithdraw,
  RewardPaid,
  Withdraw
} from "../generated/Contract/Contract"

export function createDepositEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createEmergencyWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): EmergencyWithdraw {
  let emergencyWithdrawEvent = changetype<EmergencyWithdraw>(newMockEvent())

  emergencyWithdrawEvent.parameters = new Array()

  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  emergencyWithdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return emergencyWithdrawEvent
}

export function createRewardPaidEvent(
  user: Address,
  amount: BigInt
): RewardPaid {
  let rewardPaidEvent = changetype<RewardPaid>(newMockEvent())

  rewardPaidEvent.parameters = new Array()

  rewardPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  rewardPaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return rewardPaidEvent
}

export function createWithdrawEvent(
  user: Address,
  pid: BigInt,
  amount: BigInt
): Withdraw {
  let withdrawEvent = changetype<Withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("pid", ethereum.Value.fromUnsignedBigInt(pid))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}

// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class EmergencyWithdraw extends ethereum.Event {
  get params(): EmergencyWithdraw__Params {
    return new EmergencyWithdraw__Params(this);
  }
}

export class EmergencyWithdraw__Params {
  _event: EmergencyWithdraw;

  constructor(event: EmergencyWithdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RewardPaid extends ethereum.Event {
  get params(): RewardPaid__Params {
    return new RewardPaid__Params(this);
  }
}

export class RewardPaid__Params {
  _event: RewardPaid;

  constructor(event: RewardPaid) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Contract__poolInfoResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: boolean;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: boolean,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    return map;
  }

  getToken(): Address {
    return this.value0;
  }

  getAllocPoint(): BigInt {
    return this.value1;
  }

  getLastRewardTime(): BigInt {
    return this.value2;
  }

  getAccMyUSDPerShare(): BigInt {
    return this.value3;
  }

  getIsStarted(): boolean {
    return this.value4;
  }
}

export class Contract__userInfoResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getAmount(): BigInt {
    return this.value0;
  }

  getRewardDebt(): BigInt {
    return this.value1;
  }
}

export class Contract extends ethereum.SmartContract {
  static bind(address: Address): Contract {
    return new Contract("Contract", address);
  }

  MyUSDPerSecond(): BigInt {
    let result = super.call("MyUSDPerSecond", "MyUSDPerSecond():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MyUSDPerSecond(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "MyUSDPerSecond",
      "MyUSDPerSecond():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  TOTAL_REWARDS(): BigInt {
    let result = super.call("TOTAL_REWARDS", "TOTAL_REWARDS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_TOTAL_REWARDS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOTAL_REWARDS",
      "TOTAL_REWARDS():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getGeneratedReward(_fromTime: BigInt, _toTime: BigInt): BigInt {
    let result = super.call(
      "getGeneratedReward",
      "getGeneratedReward(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_fromTime),
        ethereum.Value.fromUnsignedBigInt(_toTime),
      ],
    );

    return result[0].toBigInt();
  }

  try_getGeneratedReward(
    _fromTime: BigInt,
    _toTime: BigInt,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getGeneratedReward",
      "getGeneratedReward(uint256,uint256):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_fromTime),
        ethereum.Value.fromUnsignedBigInt(_toTime),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  myUSD(): Address {
    let result = super.call("myUSD", "myUSD():(address)", []);

    return result[0].toAddress();
  }

  try_myUSD(): ethereum.CallResult<Address> {
    let result = super.tryCall("myUSD", "myUSD():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  operator(): Address {
    let result = super.call("operator", "operator():(address)", []);

    return result[0].toAddress();
  }

  try_operator(): ethereum.CallResult<Address> {
    let result = super.tryCall("operator", "operator():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingShare(_pid: BigInt, _user: Address): BigInt {
    let result = super.call(
      "pendingShare",
      "pendingShare(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user),
      ],
    );

    return result[0].toBigInt();
  }

  try_pendingShare(_pid: BigInt, _user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "pendingShare",
      "pendingShare(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(_pid),
        ethereum.Value.fromAddress(_user),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolEndTime(): BigInt {
    let result = super.call("poolEndTime", "poolEndTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolEndTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("poolEndTime", "poolEndTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  poolInfo(param0: BigInt): Contract__poolInfoResult {
    let result = super.call(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new Contract__poolInfoResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBoolean(),
    );
  }

  try_poolInfo(param0: BigInt): ethereum.CallResult<Contract__poolInfoResult> {
    let result = super.tryCall(
      "poolInfo",
      "poolInfo(uint256):(address,uint256,uint256,uint256,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__poolInfoResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBoolean(),
      ),
    );
  }

  poolStartTime(): BigInt {
    let result = super.call("poolStartTime", "poolStartTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_poolStartTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "poolStartTime",
      "poolStartTime():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  runningTime(): BigInt {
    let result = super.call("runningTime", "runningTime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_runningTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("runningTime", "runningTime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalAllocPoint(): BigInt {
    let result = super.call(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_totalAllocPoint(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalAllocPoint",
      "totalAllocPoint():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userInfo(param0: BigInt, param1: Address): Contract__userInfoResult {
    let result = super.call(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );

    return new Contract__userInfoResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_userInfo(
    param0: BigInt,
    param1: Address,
  ): ethereum.CallResult<Contract__userInfoResult> {
    let result = super.tryCall(
      "userInfo",
      "userInfo(uint256,address):(uint256,uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromAddress(param1),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Contract__userInfoResult(value[0].toBigInt(), value[1].toBigInt()),
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _myUSD(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _poolStartTime(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddCall extends ethereum.Call {
  get inputs(): AddCall__Inputs {
    return new AddCall__Inputs(this);
  }

  get outputs(): AddCall__Outputs {
    return new AddCall__Outputs(this);
  }
}

export class AddCall__Inputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _withUpdate(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _lastRewardTime(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class AddCall__Outputs {
  _call: AddCall;

  constructor(call: AddCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawCall__Inputs {
    return new EmergencyWithdrawCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawCall__Outputs {
    return new EmergencyWithdrawCall__Outputs(this);
  }
}

export class EmergencyWithdrawCall__Inputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class EmergencyWithdrawCall__Outputs {
  _call: EmergencyWithdrawCall;

  constructor(call: EmergencyWithdrawCall) {
    this._call = call;
  }
}

export class GovernanceRecoverUnsupportedCall extends ethereum.Call {
  get inputs(): GovernanceRecoverUnsupportedCall__Inputs {
    return new GovernanceRecoverUnsupportedCall__Inputs(this);
  }

  get outputs(): GovernanceRecoverUnsupportedCall__Outputs {
    return new GovernanceRecoverUnsupportedCall__Outputs(this);
  }
}

export class GovernanceRecoverUnsupportedCall__Inputs {
  _call: GovernanceRecoverUnsupportedCall;

  constructor(call: GovernanceRecoverUnsupportedCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get to(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class GovernanceRecoverUnsupportedCall__Outputs {
  _call: GovernanceRecoverUnsupportedCall;

  constructor(call: GovernanceRecoverUnsupportedCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall extends ethereum.Call {
  get inputs(): MassUpdatePoolsCall__Inputs {
    return new MassUpdatePoolsCall__Inputs(this);
  }

  get outputs(): MassUpdatePoolsCall__Outputs {
    return new MassUpdatePoolsCall__Outputs(this);
  }
}

export class MassUpdatePoolsCall__Inputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class MassUpdatePoolsCall__Outputs {
  _call: MassUpdatePoolsCall;

  constructor(call: MassUpdatePoolsCall) {
    this._call = call;
  }
}

export class SetCall extends ethereum.Call {
  get inputs(): SetCall__Inputs {
    return new SetCall__Inputs(this);
  }

  get outputs(): SetCall__Outputs {
    return new SetCall__Outputs(this);
  }
}

export class SetCall__Inputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _allocPoint(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetCall__Outputs {
  _call: SetCall;

  constructor(call: SetCall) {
    this._call = call;
  }
}

export class SetOperatorCall extends ethereum.Call {
  get inputs(): SetOperatorCall__Inputs {
    return new SetOperatorCall__Inputs(this);
  }

  get outputs(): SetOperatorCall__Outputs {
    return new SetOperatorCall__Outputs(this);
  }
}

export class SetOperatorCall__Inputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }

  get _operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class UpdatePoolCall extends ethereum.Call {
  get inputs(): UpdatePoolCall__Inputs {
    return new UpdatePoolCall__Inputs(this);
  }

  get outputs(): UpdatePoolCall__Outputs {
    return new UpdatePoolCall__Outputs(this);
  }
}

export class UpdatePoolCall__Inputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePoolCall__Outputs {
  _call: UpdatePoolCall;

  constructor(call: UpdatePoolCall) {
    this._call = call;
  }
}

export class UpdatePoolStartTimeCall extends ethereum.Call {
  get inputs(): UpdatePoolStartTimeCall__Inputs {
    return new UpdatePoolStartTimeCall__Inputs(this);
  }

  get outputs(): UpdatePoolStartTimeCall__Outputs {
    return new UpdatePoolStartTimeCall__Outputs(this);
  }
}

export class UpdatePoolStartTimeCall__Inputs {
  _call: UpdatePoolStartTimeCall;

  constructor(call: UpdatePoolStartTimeCall) {
    this._call = call;
  }

  get _newPoolStartTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePoolStartTimeCall__Outputs {
  _call: UpdatePoolStartTimeCall;

  constructor(call: UpdatePoolStartTimeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _pid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

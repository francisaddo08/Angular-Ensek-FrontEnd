export class  UpLoadResponse{
  public successData: Array<SuccessfulData> = new Array<SuccessfulData>();
  public failedData: Array<FailedData> = new Array<FailedData>();
}
export class  SuccessfulData{
        id: number | undefined;
        accountId: number | undefined;
        meterReadingDateTime: string | undefined;
        meterReadValue: string | undefined;
}
 export class FailedData{
  accountId: number | undefined;
        meterReadingDateTime: string | undefined;
        meterReadValue: string | undefined;
}

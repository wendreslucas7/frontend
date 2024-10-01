import { MAX_INSTALLMENT, MONTHLY_INTEREST_RATE } from "../constants";
import Installment from "./Installment";

export default class CalculateParceling {
  execute(
    value: number,
    numberOfInstallments: number = MAX_INSTALLMENT,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment {
    if (numberOfInstallments < 2 || numberOfInstallments > MAX_INSTALLMENT) {
      throw new Error(
        `Quantidade de parcelas deve ser entre 2 e ${MAX_INSTALLMENT}`
      );
    }

    const totalWithRate = this.calculateCompositeInterest(
      value,
      interestRate,
      numberOfInstallments
    );

    return {
      installmentValue: this.withTwoDecimals(
        totalWithRate / numberOfInstallments
      ),
      totalValue: this.withTwoDecimals(totalWithRate),
      numberOfInstallments,
      interestRate,
    };
  }

  private calculateCompositeInterest(
    totalValue: number,
    rateMonthly: number,
    numberOfInstallments: number
  ) {
    return totalValue * Math.pow(1 + rateMonthly, numberOfInstallments);
  }

  private withTwoDecimals(valor: number): number {
    return Math.round(valor * 100) / 100;
  }
}

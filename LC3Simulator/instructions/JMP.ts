﻿class JMP extends Instruction {

    getName() {
        return "JMP";
    }

    getOperandCount() {
        return 1;
    }

    getInstructionBits(operands: Operand[]) {
        return "1100000" + Program.toBinaryPadded(operands[0].getRegisterNumber(), 3) + "000000";
    }

    areValidOperands(operands: Operand[]) {
        return operands[0].isRegisterNumber();
    }

    execute(program: Program, operands: Operand[]) {
        program.setRegister(7, program.getProgramCounter());
        program.setProgramCounter(program.getRegister(operands[0].getRegisterNumber()));
    }
}
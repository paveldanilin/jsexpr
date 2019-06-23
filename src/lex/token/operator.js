import Token from './token';
import TOKEN_TYPE from './type';
import OPERATOR from '../operator';

class TokenOperator extends Token
{
  constructor(token, pos, op, precedence)
  {
    super(TOKEN_TYPE.OPERATOR, token, pos);
    this.precedence = precedence;
    this.op = op;
  }

  getOperator()
  {
    return this.op;
  }

  getPrecedence()
  {
    return this.precedence;
  }

  isWhiteSpace()
  {
    return this.op === OPERATOR.WS;
  }

  isOpenPar()
  {
    return this.op === OPERATOR.OPEN_PAR;
  }

  isClosePar()
  {
    return this.op === OPERATOR.CLOSE_PAR;
  }

  isComma()
  {
    return this.op === OPERATOR.COMMA;
  }

  isDot()
  {
    return this.op === OPERATOR.DOT;
  }

  isUnary()
  {
    switch(this.op) {
      case OPERATOR.NOT: return true;
    }
    return false;
  }

  clone()
  {
    return new TokenOperator(this.toString(), this.getPos(), this.getOperator(), this.getPrecedence());
  }
}


export default TokenOperator;

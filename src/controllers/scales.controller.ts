import {major, naturalMinor} from '../scales/scales.service';


exports.getMajorScale = (req: any, res: any): any => {
  const {root} = req.params;
  const result = major( Number(root));
  res.send(result);
};

exports.getMinorScale = (req: any, res: any): any => {
  const {root} = req.params;
  const result = naturalMinor( Number(root));
  res.send(result);
}
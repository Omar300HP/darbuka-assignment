export const baseTransform = (_doc: any, ret: any) => {
	ret.id = ret._id.toString();
	delete ret._id;

	delete ret.__v;
};

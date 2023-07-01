export const sortAndFilterDocumentsForStatus = (documents: any[] = [], status: string = '') => {
  return documents
    .filter((_doc) => _doc.workflowStatus === status)
    .sort((a, b) => {
      const aOrderRank = a.workflowOrderRank || '0'
      const bOrderRank = b.workflowOrderRank || '0'

      return aOrderRank.localeCompare(bOrderRank)
    });
};